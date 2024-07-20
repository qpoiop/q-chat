import { IChildrenProps, IComponentProps, IStyleProps } from '@/shared/core'

interface BoxOwnProps {
    /** If true, the box will be rendered with `box-shadow`  */
    shadow?: boolean
    divide?: number
    center?: boolean
    flex?: boolean
}

export interface IBoxProps extends BoxOwnProps, IStyleProps, IComponentProps, IChildrenProps {}
