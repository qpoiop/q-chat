import { HTMLAttributes } from 'react'

interface ITextAreaOwnProps {
    value?: string
    resize?: boolean
    disabled?: boolean
    placeholder?: string
}

export interface ITextAreaProps extends ITextAreaOwnProps, Omit<HTMLAttributes<HTMLTextAreaElement>, keyof ITextAreaOwnProps> {}
