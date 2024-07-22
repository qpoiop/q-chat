import { Stack } from '@/shared/components'
import { Direction, Position } from '@/shared/core'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { IButtonGroupProps } from './ButtonGroup.types'

/**
 * ButtonGroup Component
 */
export const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroupProps>(function ButtonGroup(
    { className, direction = Direction.Horizontal, position = Position.Center, style = {}, children, ...rest },
    fowardedRef,
) {
    return (
        <Stack
            ref={fowardedRef}
            direction={direction}
            align={position}
            justify={position}
            style={{ ...style }}
            spacing={6}
            className={classNames(className)}
            {...rest}
        >
            {children}
        </Stack>
    )
})
