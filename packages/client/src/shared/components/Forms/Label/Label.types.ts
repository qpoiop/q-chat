import { IChildrenProps, IComponentProps, IFormProps, ISizeProps } from '@/shared/core'

interface ILabelOwnProps extends IFormProps {}

export interface ILabelProps extends ISizeProps, ILabelOwnProps, IChildrenProps, IComponentProps {}
