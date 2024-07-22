import { IChildrenProps, IComponentProps } from '@/shared/core'

export interface IMainOwnProps {
    headerHeight?: number
    sideBarWidth?: number
}

export interface IMainProps extends IMainOwnProps, IComponentProps, IChildrenProps {}
