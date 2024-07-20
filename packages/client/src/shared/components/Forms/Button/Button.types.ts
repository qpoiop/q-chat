import { HTMLAttributes } from 'react'
import { IChildrenProps, ISizeProps, IVariantProps } from '@/shared/core'

interface IButtonOwnProps {
    /**
     * NOTE: TODO loading spinner icon
     **/
    loading?: boolean
    outline?: boolean
    fill?: boolean
    disabled?: boolean
    onClick?: (e: React.MouseEvent) => void
}
export interface IButtonProps
    extends IChildrenProps,
        Omit<HTMLAttributes<HTMLButtonElement>, keyof IButtonOwnProps>,
        ISizeProps,
        IVariantProps,
        IButtonOwnProps {}
