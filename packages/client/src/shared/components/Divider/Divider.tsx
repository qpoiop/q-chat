import classNames from 'classnames'
import { forwardRef } from 'react'
import { Direction } from '@/shared/core'
import { SDivider } from './Divider.styles'
import { IDividerProps } from './Divider.types'

/**
 * Divider Component
 */
export const Divider = forwardRef<HTMLDivElement, IDividerProps>(function Divider(
    { className, indentation = 1, thickness = 1, direction = Direction.Vertical, ...rest },
    forwardedRef,
) {
    return (
        <SDivider
            ref={forwardedRef}
            $indentation={indentation}
            $thickness={thickness}
            className={classNames(`direction-${direction}`, className)}
            {...rest}
        />
    )
})
