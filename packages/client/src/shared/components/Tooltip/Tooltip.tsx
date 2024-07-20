import classNames from 'classnames'
import { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react'
import { Text } from 'src'
import { Size, Variant } from '@/shared/core'
import { STooltip, STooltipContent, STooltipTrigger, STooltipWrapper } from './Tooltip.styles'
import { ITootipProps } from './Tooltip.types'

/** Tooltip Component */
export const Tooltip = memo(
    forwardRef<HTMLDivElement, ITootipProps>(
        (
            {
                defaultShow,
                delay = 0,
                onShowHandler,
                onHideHandler,
                title,
                content,
                size = Size.M,
                variant = Variant.Default,
                className,
                children,
                style,
                ...rest
            },
            forwardedRef,
        ) => {
            const [isShow, setIsShow] = useState<boolean>(defaultShow)
            const timeoutRef = useRef<NodeJS.Timeout>()

            const tooltipPosition = useCallback((x: number, y: number) => {}, [])

            useEffect(() => {
                return function cleanup() {
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current)
                    }
                }
            }, [isShow])

            const onShow = useCallback(() => {
                setIsShow(true)
                onShowHandler?.()
            }, [isShow, onShowHandler])

            const onHide = useCallback(() => {
                setIsShow(false)
                onHideHandler?.()
            }, [isShow, onHideHandler])

            /** TODO: add touch event for mobile  */
            const onMouseHandler = useCallback(
                (hover: boolean) => {
                    return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        e.stopPropagation()
                        e.preventDefault()

                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current)
                            timeoutRef.current = undefined
                        }

                        if (hover) {
                            onShow()
                            return
                        }

                        if (delay > 0) {
                            timeoutRef.current = setTimeout(() => {
                                onHide()
                            }, delay)
                            return
                        }
                        onHide()
                    }
                },
                [isShow],
            )

            const TooltipContent = (
                <div>
                    {title && <Text bold={true}>{title}</Text>}
                    {content && <Text>{content}</Text>}
                </div>
            )

            return (
                <STooltipWrapper style={{ ...tooltipPosition, ...style }}>
                    <STooltip
                        ref={forwardedRef}
                        className={classNames(className)}
                        onMouseOver={onMouseHandler(true)}
                        onMouseLeave={onMouseHandler(false)}
                        {...rest}
                    >
                        <STooltipTrigger>{children}</STooltipTrigger>
                        <STooltipContent $show={isShow || defaultShow} variant={variant} className={classNames(`variant-${variant}`)}>
                            {TooltipContent}
                        </STooltipContent>
                    </STooltip>
                </STooltipWrapper>
            )
        },
    ),
)
