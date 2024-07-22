import classNames from 'classnames'
import { forwardRef, memo, useCallback } from 'react'
import { Size, Variant } from '@/shared/core'
import { SClose, SCloseWrapper } from './Close.styles'
import { ICloseProps } from './Close.types'

/** Close Icon */
export const Close = memo(
    forwardRef<SVGSVGElement, ICloseProps>(function Close(
        { source: Source, size = Size.M, fill = false, outline = false, variant = Variant.Default, onClose, ...rest },
        forwardedRef,
    ) {
        const onCloseHandler = useCallback(
            (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                e.preventDefault()
                onClose?.()
            },
            [onClose],
        )

        return (
            <SCloseWrapper
                data-variant={variant}
                variant={variant}
                size={size}
                className={classNames(`variant-${variant}`, `size-${size}`, outline && 'outline', fill && 'fill')}
                {...rest}
            >
                {Source ? <Source ref={forwardedRef} viewBox="0 0 30 10" preserveAspectRatio="none" /> : <SClose onClick={onCloseHandler} />}
            </SCloseWrapper>
        )
    }),
)
