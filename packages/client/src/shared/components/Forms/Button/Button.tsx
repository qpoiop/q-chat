import classNames from 'classnames'
import { forwardRef, useCallback } from 'react'
import { Loading } from 'src'
import { Size, Variant } from '@/shared/core'
import { IButtonProps } from '.'
import { SButton } from './Button.styles'

/**
 * Button Component
 */
export const Button = forwardRef<HTMLButtonElement, IButtonProps>(function Button(
    {
        className,
        variant = Variant.Default,
        size = Size.M,
        disabled = false,
        loading = false,
        outline = true,
        fill = true,
        children,
        onClick,
        ...rest
    },
    fowardedRef,
) {
    const onClickHandler = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
        e => {
            e.preventDefault()
            if (!disabled) onClick?.(e)
        },
        [onClick, disabled],
    )

    return (
        <SButton
            ref={fowardedRef}
            tabIndex={-1}
            variant={variant}
            className={classNames(`Button`, `variant-${variant}`, `size-${size}`, outline && `outline`, fill && `fill`, className)}
            onClick={onClickHandler}
            disabled={disabled}
            {...rest}
        >
            {loading ? <Loading /> : children}
        </SButton>
    )
})
