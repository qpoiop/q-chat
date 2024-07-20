import classNames from 'classnames'
import { forwardRef, useCallback, useMemo, useState } from 'react'
import { ListItem, PopOver, Stack } from 'src'
import { DefaultValue, Direction } from '@/shared/core'
import { ISelectControlItem, ISelectControlProps } from './SelectControl.types'

/**
 * SelectControl
 * `Popover` + `Stack`
 */
export const SelectControl = forwardRef<HTMLDivElement, ISelectControlProps>(function SelectControl(
    { className, items = [], value, disabled = false, placeholder = DefaultValue.BLANK, onSelect, style, children, selectWithClose = true, ...rest },
    forwardedRef,
) {
    const defaultLabel = useMemo(() => {
        const selectedItem = items.find(item => value === item?.value)
        if (selectedItem) return selectedItem.label ?? selectedItem.value
        else return placeholder
    }, [value, placeholder])

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onSelectItem = useCallback(
        (item: ISelectControlItem) => {
            if (!disabled) onSelect?.(item)
            if (selectWithClose) setIsOpen(false)
        },
        [onSelect, isOpen],
    )

    const itemRenderer = useCallback(() => {
        const selects: React.ReactNode[] = []

        items.forEach(item => {
            const isActive = useMemo(() => item.value == value, [item])
            selects.push(
                <ListItem padding={5} key={item.value} active={isActive} onClick={() => onSelectItem(item)}>
                    {item.label ?? item.value}
                </ListItem>,
            )
        })

        return selects
    }, [items, value, isOpen])

    const selects = itemRenderer()

    return (
        <PopOver
            ref={forwardedRef}
            disabled={disabled}
            open={isOpen}
            label={defaultLabel}
            onOpen={isOpen => setIsOpen(isOpen)}
            style={style}
            className={classNames(className)}
            {...rest}
        >
            <Stack direction={Direction.Vertical}>{selects}</Stack>
        </PopOver>
    )
})
