import { HAlign } from '@/shared/core'

export type ITableKey = string | number

export type ITableData = {
    [key: string | symbol]: any
}

export type ITableRow<R extends ITableData = ITableData> = R
export type ITableRows<R extends ITableData = ITableData> = Readonly<ITableRow<R>[]>

export type ITableColumn<R extends ITableData = ITableData, V = any> = {
    field: string
    header?: string
    columnWidth?: number
    cellClassName?: string
    render?: (params: ITableCell<R, V>) => React.ReactNode
}

export type ITableCell<R extends ITableData = any, V = unknown> = {
    id: ITableKey
    field: string
    value?: V
    row: ITableRow<R>
}

interface ITableControlOwnProps<R extends ITableData = any> {
    /**
     * The table rows
     * @default []
     */
    rows: ITableRows<R>

    /**
     * The Table columns
     */
    columns: readonly ITableColumn<R>[]

    /**
     * If true, a loading overlay is displayed.
     */
    loading?: boolean

    /**
     * If true, a header row is displayed.
     */
    showHeader?: boolean

    /**
     * If true, a header row will be pinned.
     */
    pinnedHeader?: boolean

    cellAlign?: HAlign

    rowSelection?: boolean
    defaultRowSelection?: ITableKey[]
    onRowClick?: (row: ITableRow<R>) => void
    onRowSelect?: (selection: ITableKey[]) => void
    inlineScroll?: boolean

    /**
     * Unique Key of Table's row data
     * @default id
     */
    uniqueKey?: ITableKey

    border?: boolean
    cellBorder?: boolean

    /**
     * If `true`, pagination is enabled.
     * @default false
     */
    pagination?: boolean
    onPageChange?: (page: number) => void
    paginationModel?: IPaginationModel
    offsetOptions?: number[]
    onOffsetChange?: (offset: number) => void
}

export interface ITableControlProps<R extends ITableData = any> extends ITableControlOwnProps<R> {}

/** Table internal api */
export interface ITableApiModel<State extends ITableApiState = ITableApiState> {
    state: State
    setState: (state: State | ((previousState: State) => State)) => boolean
    selector?: ITableApiSelector
}

export interface ITableApiState<R extends ITableData = ITableData> {
    rowSelection?: ITableKey[]
    paginationModel?: IPaginationModel
    columns: readonly ITableColumn<R>[]
    rows: ITableRows<R>
}

export interface ITableApiSelector {
    isRowSelected?: (key: ITableKey) => boolean
    getRowId?: (row: ITableData) => ITableKey
    getRowIds?: () => ITableKey[]
    selectRow?: (id: ITableKey, isSelected: boolean) => void
    selectRows?: (ids: ITableKey[], isSelected: boolean) => void
    setPage?: (page: number) => void
    changeOffset?: (offset: number) => void
}

export interface IPaginationModel {
    /**
     * The index of the current page.
     * @default 1
     */
    page: number

    /**
     * Set the number of rows in one page.
     * @default 10
     */
    offset: number

    /**
     * The number of rows
     */
    totalCount?: number
}
export interface ITableRowModel {
    rowId: ITableKey
    row: ITableRow
    rowSelected?: boolean
}
