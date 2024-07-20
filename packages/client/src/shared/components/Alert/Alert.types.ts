import { IModalHeaderProps, IModalProps } from '@/shared/components/Modal'

interface IAlertOwnProps {
    onApply?: () => void
    ApplyButtonText?: string
}

export interface IAlertProps extends IAlertOwnProps, IModalProps, IModalHeaderProps {}
