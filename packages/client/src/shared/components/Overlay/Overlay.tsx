import { VAlign } from '@/shared/core'
import { useMergeRefs } from '@/shared/hooks/useMergeRefs'
import classNames from 'classnames'
import { forwardRef, useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import ReactDOM from 'react-dom'
import { SOverlay, SOverlayContainer, SOverlayWrapper } from './Overlay.styles'
import { IOverlayProps } from './Overlay.types'

/**
 * Overlay Component
 */
export const Overlay = forwardRef<HTMLDivElement, IOverlayProps>(function Overlay(
    {
        className,
        show,
        onHide,
        containerRef,
        targetRef,
        enableOutsideClick = true,
        enableEscapeKey = true,
        border = false,
        position = VAlign.Bottom, // TODO: vertical position
        children,
        margin = 5,
        style = {},
        ...rest
    },
    forwardedRef,
) {
    const isInContainer = useMemo(() => !!containerRef, [containerRef])
    const rootContainer = containerRef ?? window.document?.body

    const overlayRef = useRef<HTMLDivElement>(null)

    // NOTE: forwardedRef -> ref로 사용하기 위한 참조
    const mergedRef = useMergeRefs<HTMLDivElement>(overlayRef, forwardedRef)

    /** Overlay 기본 위치 지정 */
    const overlayPosition = useMemo(() => {
        if (targetRef && rootContainer) {
            const { top: containerTop, left: containerLeft } = rootContainer?.getBoundingClientRect()
            const { top: targetTop, left: targetLeft, height: targetHeight } = targetRef.getBoundingClientRect()

            const top = targetTop - targetRef.clientTop - containerTop + targetHeight + (isInContainer ? containerRef.scrollTop : 0)
            const left = targetLeft - targetRef.clientLeft - containerLeft + (isInContainer ? containerRef.scrollLeft : 0)

            return {
                top: top + margin,
                left,
            }
        }
    }, [targetRef, rootContainer, isInContainer, margin])

    /** Overlay 외부 영역 클릭 시 동작 */
    const onHandleOutsideClick = useCallback(
        (e: MouseEvent) => {
            if (!enableOutsideClick) {
                e.stopPropagation()
            } else if (!(targetRef?.contains(e.target as HTMLElement) || overlayRef?.current?.contains(e.target as HTMLElement))) {
                onHide?.()
            }
        },
        [enableOutsideClick, onHide],
    )

    /** ESC 키 입력 시 Overlay 숨김 처리 */
    const onHandleKeydown = useCallback(
        (event: HTMLElementEventMap['keyup']) => {
            // NOTE: event keycode 상수로 변경
            if (event.key === 'Escape') {
                enableEscapeKey && onHide?.()
            }
        },
        [onHide],
    )

    useLayoutEffect(() => {
        if (show) {
            window.document.addEventListener('click', onHandleOutsideClick)
            window.document.addEventListener('keydown', onHandleKeydown)
        }

        return function cleanup() {
            window.document.removeEventListener('click', onHandleOutsideClick)
            window.document.removeEventListener('keydown', onHandleOutsideClick)
        }
    }, [show])

    if (!show) return null

    const OverlayContent = (
        <SOverlay
            ref={mergedRef}
            style={{ ...overlayPosition, ...style }}
            className={classNames(!show && 'hidden', border && 'border', className)}
            {...rest}
        >
            {children}
        </SOverlay>
    )

    /** DOM 외부 영역에 생성 */
    return ReactDOM.createPortal(
        isInContainer ? (
            OverlayContent
        ) : (
            <SOverlayContainer className={classNames(!show && 'hidden')}>
                <SOverlayWrapper>{OverlayContent}</SOverlayWrapper>
            </SOverlayContainer>
        ),
        rootContainer,
    )
})
