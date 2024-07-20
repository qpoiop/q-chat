import { IChildrenProps, IComponentProps, IVariantProps } from '@/shared/core'

interface ISideBarOwnProps {
    width?: number
    collapse?: boolean
}

export interface ISideBarProps extends ISideBarOwnProps, IComponentProps, IChildrenProps, IVariantProps {}
