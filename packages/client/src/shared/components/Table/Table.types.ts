import { HAlign, IChildrenProps, IComponentProps } from '@/shared/core'

interface ITableOwnProps {
    border?: boolean
}

export interface ITableRowProps extends IChildrenProps, IComponentProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>
    selected?: boolean
}

export interface ITableCellProps extends IChildrenProps, IComponentProps {
    cellAlign?: HAlign
    cellWidth?: number
    cellBorder?: boolean
}

export interface ITableBodyProps extends IChildrenProps, IComponentProps {
    inlineScroll?: boolean
}

export interface ITableHeaderProps extends IChildrenProps, IComponentProps {
    pinned?: boolean
}
export interface ITableFooterProps extends IChildrenProps, IComponentProps {
    float?: boolean
}

export interface ITableProps extends ITableOwnProps, IComponentProps, IChildrenProps {}
