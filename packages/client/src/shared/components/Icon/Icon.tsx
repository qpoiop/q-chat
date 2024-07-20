import classNames from 'classnames'
import { forwardRef, memo } from 'react'
import { IIconProps, Size, Variant } from '@/shared/core'
import { SIcon } from './Icon.styles'

/** Icon SVG */
export const Icon = memo(
    forwardRef<SVGSVGElement, IIconProps>(function Icon(
        { source: Source, circle = false, size = Size.M, variant = Variant.Default, shadow = false, outline = false, fill = false },
        forwardedRef,
    ) {
        return (
            <SIcon
                data-variant={variant}
                variant={variant}
                size={size}
                className={classNames(
                    `variant-${variant}`,
                    `size-${size}`,
                    outline && 'outline',
                    fill && 'fill',
                    circle && 'circle',
                    shadow && 'shadow',
                )}
            >
                {Source && <Source ref={forwardedRef} preserveAspectRatio="none" />}
            </SIcon>
        )
    }),
)
