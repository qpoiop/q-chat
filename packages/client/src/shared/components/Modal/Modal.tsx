import classNames from 'classnames'
import { forwardRef, memo, useMemo } from 'react'
import { Close, Overlay, Text } from 'src'
import { useCreateContext } from '@/shared/hooks/useCreateContext'
import { DefaultValue, HAlign, Size } from '@/shared/core'
import { SModal, SModalBackground, SModalClose, SModalContent, SModalFooter, SModalHeader } from './Modal.styles'
import { IModalContextProps, IModalHeaderProps, IModalProps } from './Modal.types'

const [ModalProvider, useModalContext] = useCreateContext<IModalContextProps>({
    onClose: () => {},
    showCloseButton: true,
})

/**
 * Modal Component
 *
 * `Overlay`
 *
 */
export const Modal = memo(
    forwardRef<HTMLDivElement, IModalProps>(function Modal(
        {
            className,
            show = false,
            enableOutsideClick = false,
            showCloseButton = true,
            containerRef,
            size = Size.M,
            onClose,
            style,
            children,
            ...rest
        },
        forwardedRef,
    ) {
        const rootContainer = containerRef || window.document.body
        const contextProps = useMemo(() => {
            return { onClose, showCloseButton }
        }, [onClose, showCloseButton])

        return (
            /** `enableOutsideClick` 옵션은 오버레이에 전달하지 않고 모달 배경 클릭 시 닫힘 여부로 처리함 (이벤트 중복 방지) **/
            <Overlay
                style={{ position: 'fixed' }}
                show={show}
                containerRef={rootContainer}
                enableEscapeKey={false}
                enableOutsideClick={false}
                onHide={() => onClose?.()}
            >
                <SModalBackground onClick={() => enableOutsideClick && onClose?.()} />
                <SModal ref={forwardedRef} size={size} className={classNames(`Modal`, `size-${size}`, className)} style={{ ...style }} {...rest}>
                    <ModalProvider value={contextProps}>
                        <SModalContent>{children}</SModalContent>
                    </ModalProvider>
                </SModal>
            </Overlay>
        )
    }),
)

export const ModalHeader = memo(
    forwardRef<HTMLDivElement, IModalHeaderProps>(function ModalHeader({ title = DefaultValue.BLANK, subTitle = DefaultValue.BLANK }, forwardedRef) {
        const { onClose, showCloseButton } = useModalContext()
        return (
            <SModalHeader ref={forwardedRef}>
                <Text size={Size.S} align={HAlign.Left}>
                    {subTitle}
                </Text>
                <Text bold={true} size={Size.L}>
                    {title}
                </Text>
                {showCloseButton && (
                    <SModalClose size={Size.XS} onClick={() => onClose?.()}>
                        <Close />
                    </SModalClose>
                )}
            </SModalHeader>
        )
    }),
)

export const ModalFooter = memo(
    forwardRef<HTMLDivElement, IModalHeaderProps>(function ModalFooter({ children }, forwardedRef) {
        return <SModalFooter ref={forwardedRef}> {children}</SModalFooter>
    }),
)
