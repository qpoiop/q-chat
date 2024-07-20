import { IComponentProps, IIconProps, Shift } from '@/shared/core'

interface IArrowOwnProps {
    /**
     * the direction of arrow icon
     */
    direction?: Shift
}

export interface IArrowProps extends IArrowOwnProps, IIconProps, IComponentProps {}
