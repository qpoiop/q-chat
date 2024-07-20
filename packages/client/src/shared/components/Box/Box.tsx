import classNames from 'classnames'
import { forwardRef } from 'react'
import { useLayoutProps } from '@/shared/hooks/useStyleProps'
import { SBox } from './Box.styles'
import { IBoxProps } from './Box.types'

/** `Box` component */
export const Box = forwardRef<HTMLDivElement, IBoxProps>(function Box(
    { flex = false, center = false, divide = 0, shadow = false, children, className, ...rest },
    forwardedRef,
) {
    const props = useLayoutProps(rest)

    return (
        <SBox
            ref={forwardedRef}
            style={{ ...props.style }}
            divide={divide}
            className={classNames(flex && `flex`, center && `center`, shadow && 'shadow', props.className, className)}
        >
            {children}
        </SBox>
    )
})
