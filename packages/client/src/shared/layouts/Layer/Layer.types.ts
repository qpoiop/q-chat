import { Direction, IChildrenProps, IComponentProps } from '@/shared/core'

interface ILayerRootOwnProps {
    direction?: Direction
    padding?: number
    spacing?: number
}

export interface ILayerProps extends ILayerRootOwnProps, IChildrenProps, IComponentProps {}
export interface ILayerSlotProps extends IChildrenProps, IComponentProps {
    divide?: number
    padding?: number
    raduis?: number
    shadow?: boolean
    border?: boolean
}
