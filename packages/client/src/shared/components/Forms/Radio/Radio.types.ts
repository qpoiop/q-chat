import { ChangeEvent } from 'react'
import { IChildrenProps, IComponentProps, IFormProps } from '@/shared/core'

interface IRadioOwnProps extends IFormProps {
    value?: string
    disabled?: boolean
    checked?: boolean
    onCheck?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface IRadioProps extends IRadioOwnProps, IChildrenProps, IComponentProps {}
