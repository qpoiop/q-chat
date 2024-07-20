import classNames from 'classnames'
import { forwardRef, useMemo } from 'react'
import { useCreateContext } from '@/shared/hooks/useCreateContext'
import { SMain } from './Main.styles'
import { IMainOwnProps, IMainProps } from './Main.types'

const [MainLayoutProvider, useMainLayoutContext] = useCreateContext<IMainOwnProps>(null)
export { useMainLayoutContext }

export const Main = forwardRef<HTMLDivElement, IMainProps>(function Main(
    { headerHeight = 60, sideBarWidth = 200, className, children },
    forwardedRef,
) {
    const MainLayoutProps = useMemo(
        () => ({
            headerHeight,
            sideBarWidth,
        }),
        [headerHeight, sideBarWidth],
    )

    return (
        <SMain ref={forwardedRef} className={classNames(className)}>
            <MainLayoutProvider value={MainLayoutProps}>{children}</MainLayoutProvider>
        </SMain>
    )
})
