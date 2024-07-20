import { IChildrenProps, IComponentProps, IStyleProps, IVariantProps } from '@/shared/core'

interface IHeaderOwnProps {
    leftContent?: React.ReactNode
    rightContent?: React.ReactNode
}

export interface IHeaderProps extends IHeaderOwnProps, IComponentProps, IChildrenProps, IStyleProps, IVariantProps {}
