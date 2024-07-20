import { ChangeEvent } from 'react'
import { IFormItemProps } from 'src'
import { IChildrenProps, IComponentProps } from '@/shared/core'

interface ICheckBoxOwnProps extends IFormItemProps {
    value?: string
    name?: string
    checked?: boolean
    onCheck?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ICheckBoxProps extends ICheckBoxOwnProps, IChildrenProps, IComponentProps {}
