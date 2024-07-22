import classNames from 'classnames'
import { forwardRef, useCallback, useRef } from 'react'
import { DefaultValue, Shift, Size } from '@/shared/core'
import { Arrow } from '../Icon/Arrow'
import { Text } from '../Text'
import { SPopOverContainer, SPopOverOverlay, SPopOverTrigger } from './PopOver.styles'
import { IPopOverProps } from './PopOver.types'

/**
 * PopOver Component
 * `Button` + `Overlay`
 */
export const PopOver = forwardRef<HTMLDivElement, IPopOverProps>(function PopOver(
    { className, label, open = false, disabled = false, placeholder = DefaultValue.BLANK, style, onOpen, children, ...rest },
    forwardedRef,
) {
    const containerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLButtonElement>(null)

    const onOpenHandler = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            if (!disabled) onOpen?.(!open)
        },
        [open, onOpen],
    )

    return (
        <SPopOverContainer style={style} ref={containerRef} className={classNames(className)} {...rest}>
            <SPopOverTrigger ref={triggerRef} onClick={onOpenHandler} disabled={disabled}>
                <Text size={Size.S}> {label || placeholder} </Text>
                <Arrow direction={open ? Shift.Up : Shift.Down} size={Size.S} />
            </SPopOverTrigger>
            <SPopOverOverlay
                ref={forwardedRef}
                show={!disabled && open}
                enableOutsideClick={true}
                containerRef={containerRef.current}
                targetRef={triggerRef.current}
                onHide={() => onOpen?.(false)}
            >
                {children}
            </SPopOverOverlay>
        </SPopOverContainer>
    )
})
