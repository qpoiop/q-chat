import classNames from 'classnames'
import { forwardRef } from 'react'
import { Direction, Position } from '@/shared/core'
import { IStackProps } from '.'
import { SStack } from './Stack.styles'

/**
 * Stack Component
 */
export const Stack = forwardRef<HTMLDivElement, IStackProps>(function Stack(
    {
        className,
        padding = 0,
        spacing = 0,
        direction = Direction.Horizontal,
        justify = Position.baseline,
        align = Position.baseline,
        children,
        ...rest
    },
    forwardedRef,
) {
    return (
        <SStack
            ref={forwardedRef}
            $gap={spacing}
            $padding={padding}
            className={classNames(justify && `justify-${justify}`, align && `align-${align}`, `direction-${direction}`, className)}
            {...rest}
        >
            {children}
        </SStack>
    )
})
