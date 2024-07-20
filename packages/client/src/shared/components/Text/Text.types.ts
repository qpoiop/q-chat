import { HAlign, IChildrenProps, IComponentProps, ISizeProps, IVariantProps } from '@/shared/core'

interface ITextOwnProps {
    align?: HAlign
    truncated?: boolean | number
    italic?: boolean
    bold?: boolean
}

export interface ITextProps extends IComponentProps, ISizeProps, IVariantProps, ITextOwnProps, IChildrenProps {}
