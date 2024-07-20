import { IIconProps } from '@/shared/core'

interface ICloseOwnProps {
    onClose?: () => void
}
export interface ICloseProps extends ICloseOwnProps, IIconProps {}
