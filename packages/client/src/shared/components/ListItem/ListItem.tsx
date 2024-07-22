import classNames from 'classnames'
import { forwardRef, useCallback } from 'react'
import { Size } from '@/shared/core'
import { SListItem } from './ListItem.styles'
import { IListItemProps } from './ListItem.types'

/** ListItem Component */
export const ListItem = forwardRef<HTMLDivElement, IListItemProps>(function ListItem(
    { disabled = false, active = false, onClick, size = Size.M, padding = 0, className, children },
    forwardedRef,
) {
    const onClickHandler = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault()
            onClick?.(e)
        },
        [onClick],
    )

    return (
        <SListItem
            ref={forwardedRef}
            padding={padding}
            onClick={onClickHandler}
            className={classNames(`size-${size}`, disabled && `disabled`, active && `active`, className)}
        >
            {children}
        </SListItem>
    )
})
