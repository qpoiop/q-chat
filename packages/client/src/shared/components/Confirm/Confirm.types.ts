import { IModalHeaderProps, IModalProps } from '../Modal'

interface IConfirmOwnProps {
    onApply?: () => void
    applyButtonText?: string
    cancelButtonText?: string
}

export interface IConfirmProps extends IConfirmOwnProps, IModalProps, IModalHeaderProps {}
