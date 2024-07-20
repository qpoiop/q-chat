import { IComponentProps, ISizeProps, IVariantProps } from '@/shared/core'

interface ISwitchOwnProps {
    disabled?: boolean
    checked?: boolean
    onChange?: (checked: boolean) => void
}

export interface ISwitchProps extends ISwitchOwnProps, IVariantProps, ISizeProps, IComponentProps {}
