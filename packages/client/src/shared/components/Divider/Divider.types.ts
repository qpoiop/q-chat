import { Direction, IComponentProps } from '@/shared/core'

interface IDividerOwnProps {
    direction?: Direction
    thickness?: number
    indentation?: number
}

export interface IDividerProps extends IComponentProps, IDividerOwnProps {}
