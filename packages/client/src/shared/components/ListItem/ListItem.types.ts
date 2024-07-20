import { IChildrenProps, IComponentProps, ISizeProps } from '@/shared/core'

interface IListItemOwnProps {
    /**
     * If true, the text will be styled as primary.
     * @default false
     **/
    active?: boolean
    disabled?: boolean
    padding?: number
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface IListItemProps extends IChildrenProps, IComponentProps, IListItemOwnProps, ISizeProps {}
