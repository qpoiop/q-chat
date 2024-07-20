import { Direction, Position } from '../../../shared/enums/components.enums'
import { IChildrenProps, IComponentProps } from '../../../shared/types/components.types'

interface IButtonGroupOwnProps {
    direction?: Direction
    position?: Position
}

export interface IButtonGroupProps extends IButtonGroupOwnProps, IChildrenProps, IComponentProps {}
