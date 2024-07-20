import classNames from 'classnames'
import { forwardRef } from 'react'
import { HAlign, Size, Variant, isNumber } from '@/shared/core'
import { SText } from './Text.styles'
import { ITextProps } from './Text.types'

/**
 * Text Component
 */
export const Text = forwardRef<HTMLSpanElement, ITextProps>(function Text(
    { className, align = HAlign.Left, bold = false, italic = false, size = Size.M, truncated = false, variant = Variant.Default, children },
    fowardedRef,
) {
    return (
        <SText
            ref={fowardedRef}
            $truncated={isNumber(truncated) ? truncated : 1}
            size={size}
            variant={variant}
            className={classNames(
                {
                    truncated: !!truncated,
                    'multi-line': isNumber(truncated) && truncated > 0,
                },
                italic && 'italic',
                bold && 'bold',
                `text-${align}`,
                `size-${size}`,
                `variant-${variant}`,
                className,
            )}
        >
            {children}
        </SText>
    )
})
