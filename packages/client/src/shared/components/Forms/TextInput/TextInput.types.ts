import { ChangeEvent } from 'react'
import { IComponentProps, IFormProps, InputType } from '@/shared/core'

interface IInputOwnProps extends IFormProps {
    placeholder?: string
    type?: InputType
    value?: string | number | readonly string[]
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void

    leftContent?: React.ReactNode
    rightContent?: React.ReactNode

    /**
     * @todo: default Focus to current form item
     * @default false
     */
    focus?: boolean
}

export interface IInputProps extends IInputOwnProps, IComponentProps {}

export interface IInputRef {
    onFocus: () => void
    onBlur: () => void
}
