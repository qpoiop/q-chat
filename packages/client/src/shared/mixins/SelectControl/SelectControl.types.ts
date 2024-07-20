import { IChildrenProps, IComponentProps } from '@/shared/core'

export interface ISelectControlItem {
    label?: string
    value: string
}

interface ISelectControlOwnProps {
    disabled?: boolean
    placeholder?: string
    value?: string
    items?: ISelectControlItem[]
    selectWithClose?: boolean
    onSelect?: (item: ISelectControlItem) => void
}

export interface ISelectControlProps extends ISelectControlOwnProps, IChildrenProps, IComponentProps {}

export interface ISelectControlItemProps extends IChildrenProps {
    item: ISelectControlItem
    active?: boolean
    disabled?: boolean
    onClick?: (item: ISelectControlItem) => void
}
