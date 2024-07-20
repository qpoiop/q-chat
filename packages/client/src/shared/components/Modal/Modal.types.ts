import { IChildrenProps, IComponentProps, ISizeProps } from '@/shared/core'

interface IModalOwnProps {
    show: boolean
    onClose?: () => void
    enableOutsideClick?: boolean
    showCloseButton?: boolean
    targetRef?: HTMLElement
    containerRef?: HTMLElement
}

export interface IModalProps extends IModalOwnProps, IChildrenProps, IComponentProps, ISizeProps {}

export type IModalContextProps = Pick<IModalProps, 'onClose' | 'showCloseButton'>

export interface IModalHeaderProps extends IChildrenProps {
    title?: string
    subTitle?: string
}
export interface IModalFooterProps extends IChildrenProps {}
