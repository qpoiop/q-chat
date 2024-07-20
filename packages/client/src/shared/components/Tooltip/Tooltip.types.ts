import { IChildrenProps, IComponentProps, ISizeProps, IVariantProps } from '@/shared/core'

interface ITooltipOwnProps {
    /**
     * The state of the tooltip need to be opened.
     */
    defaultShow: boolean
    title?: string
    content?: string
    delay?: number
    /**
     * Callback function to be called when the tooltip is opened.
     */
    onShowHandler?: () => void
    /**
     * Callback function to be called when the tooltip is closed.
     */
    onHideHandler?: () => void
}
export interface ITootipProps extends ITooltipOwnProps, IChildrenProps, ISizeProps, IVariantProps, IComponentProps {}
