import classNames from 'classnames'
import { forwardRef, memo } from 'react'
import { Size, Variant } from '@/shared/core'
import { SLoading, SLoadingWrapper } from './Loading.styles'
import { ILoadingProps } from './Loading.types'

/** Loading Icon */
export const Loading = memo(
    forwardRef<SVGSVGElement, ILoadingProps>(function Loading(
        { source: Source, loading = false, size = Size.M, variant = Variant.Default, outline = false, fill = false },
        forwardedRef,
    ) {
        if (!loading) return

        return (
            <SLoadingWrapper
                data-variant={variant}
                variant={variant}
                size={size}
                className={classNames(`variant-${variant}`, `size-${size}`, outline && 'outline', fill && 'fill')}
            >
                {Source ? <Source ref={forwardedRef} viewBox="0 0 30 10" preserveAspectRatio="none" /> : <SLoading />}
            </SLoadingWrapper>
        )
    }),
)
