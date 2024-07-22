import { Direction, IChildrenProps, IComponentProps, Position } from '@/shared/core'

interface IStackOwnProps {
    spacing?: number
    padding?: number
    direction?: Direction
    justify?: Position
    align?: Position
}

export interface IStackProps extends IComponentProps, IChildrenProps, IStackOwnProps {}
