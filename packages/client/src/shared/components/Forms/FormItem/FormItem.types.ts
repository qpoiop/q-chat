import { Direction, IChildrenProps, IComponentProps, IFormProps } from '@/shared/core'

interface IFormItemOwnProps extends IFormProps {
    labelPosition?: Direction
}

export type IFormItemContextProps = Pick<IFormItemOwnProps, keyof IFormProps>
export interface IFormItemProps extends IChildrenProps, IComponentProps, IFormItemOwnProps {}
