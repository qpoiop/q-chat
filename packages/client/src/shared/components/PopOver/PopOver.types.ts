import { IChildrenProps, IComponentProps } from '@/shared/core'

interface IPopOverOwnProps {
    disabled?: boolean
    label?: string
    placeholder?: string
    open?: boolean
    onOpen?: (open: boolean) => void
}
export interface IPopOverProps extends IPopOverOwnProps, IChildrenProps, IComponentProps {}
