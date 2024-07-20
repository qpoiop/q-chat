import classNames from 'classnames'
import { forwardRef } from 'react'
import { useLayoutProps } from '@/shared/hooks/useStyleProps'
import { Variant } from '@/shared/core'
import { useMainLayoutContext } from '../Main'
import style from './Header.module.scss'
import { SHeaderLeftContents, SHeaderRightContents } from './Header.styles'
import { IHeaderProps } from './Header.types'

export const Header = forwardRef<HTMLDivElement, IHeaderProps>(function Header(
    { variant = Variant.Default, className, leftContent, rightContent, children, ...rest },
    forwardedRef,
) {
    const { headerHeight = 60 } = useMainLayoutContext()
    const styleProps = useLayoutProps({
        ...rest,
    })

    return (
        <header
            ref={forwardedRef}
            style={{
                height: headerHeight,
                ...styleProps.style,
            }}
            className={classNames(style.Header, `variant-${variant}`, styleProps.className, className)}
        >
            {leftContent && <SHeaderLeftContents> {leftContent} </SHeaderLeftContents>}
            {children}
            {rightContent && <SHeaderRightContents> {rightContent} </SHeaderRightContents>}
        </header>
    )
})
