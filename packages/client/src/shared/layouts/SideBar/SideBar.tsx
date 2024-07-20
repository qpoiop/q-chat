import classNames from 'classnames'
import { forwardRef, useEffect, useState } from 'react'
import { Variant } from '@/shared/core'
import { SSideBar } from './SideBar.styles'
import { ISideBarProps } from './SideBar.types'

export const SideBar = forwardRef<HTMLDivElement, ISideBarProps>(function SideBar(
    { width = 200, collapse = false, variant = Variant.Default, className, children },
    forwardedRef,
) {
    const [isCollapse, setIsCollase] = useState<boolean>(collapse)
    useEffect(() => setIsCollase(collapse), [collapse])

    return (
        <SSideBar
            ref={forwardedRef}
            variant={variant}
            style={{ width }}
            className={classNames(isCollapse && `collapse`, `variant-${variant}`, className)}
        >
            {children}
        </SSideBar>
    )
})
