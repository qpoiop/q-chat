import { IChildrenProps, IComponentProps, VAlign } from '@/shared/core'

interface IOverlayOwnProps {
    show: boolean
    onHide?: () => void
    containerRef?: HTMLElement | null
    targetRef?: HTMLElement | null
    enableOutsideClick?: boolean
    enableEscapeKey?: boolean
    border?: boolean

    /**
     * TODO: vertical position options
     * @default VAlign.Center
     **/
    position?: VAlign
    margin?: number
}

export interface IOverlayProps extends IOverlayOwnProps, IChildrenProps, IComponentProps {}
