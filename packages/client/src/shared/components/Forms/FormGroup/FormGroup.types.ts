import { Direction, IChildrenProps, IComponentProps, Position } from '@/shared/core'

interface IFormGroupOwnProps {
    direction?: Direction
    position?: Position
    value?: string
    onChange?: (value: string) => void
}

export interface IFormGroupProps extends IFormGroupOwnProps, IChildrenProps, IComponentProps {}
