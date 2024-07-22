import classNames from 'classnames'
import { forwardRef } from 'react'
import { Shift, Size, Variant } from '@/shared/core'
import { SArrow, SArrowWrapper } from './Arrow.styles'
import { IArrowProps } from './Arrow.types'

/** Arrow Icon */
export const Arrow = forwardRef<HTMLDivElement, IArrowProps>(function Arrow(
    { direction = Shift.Down, size = Size.M, fill = false, outline = false, variant = Variant.Default, onClick, style, className },
    forwardedRef,
) {
    return (
        <SArrowWrapper
            ref={forwardedRef}
            style={style}
            variant={variant}
            className={classNames(`variant-${variant}`, `size-${size}`, outline && 'outline', fill && 'fill', className)}
            onClick={onClick}
        >
            <SArrow className={classNames(`direction-${direction}`)} />
        </SArrowWrapper>
    )
})
