import { forwardRef, memo, useCallback } from 'react'
import { Loading, Table, TableBody } from 'src'
import { useCreateContext } from '@/shared/hooks/useCreateContext'
import { IChildrenProps, range } from '@/shared/core'
import { initializeProps, registerApi } from './TableControl.func'
import { ITableApiModel, ITableControlProps, ITableData } from './TableControl.types'
import { TableControlFooter } from './TableControlFooter'
import { TableControlHeader } from './TableControlHeader'
import { TableControlRow } from './TableControlRow'

const [TableRootProvider, useTableRootContext] = useCreateContext<ITableControlProps>()
const [TableApiProvider, useTableApiContext] = useCreateContext<ITableApiModel>()

export { useTableApiContext, useTableRootContext }

const TableControlRoot = forwardRef(function TableControlRoot<R extends ITableData = any>(
    props: ITableControlProps<R>,
    forwardedRef: React.Ref<HTMLDivElement>,
): React.JSX.Element {
    const rootProps = initializeProps<R>(props)
    const tableRef = registerApi<R>(rootProps)

    return (
        <TableRootProvider value={rootProps}>
            <TableApiProvider value={tableRef.current}>
                <TableControlSlot ref={forwardedRef} />
            </TableApiProvider>
        </TableRootProvider>
    )
})

const TableControlSlot = forwardRef<HTMLDivElement, IChildrenProps>(function TableControlSlot({ children }, forwardedRef) {
    const rootProps = useTableRootContext()
    const tableApi = useTableApiContext()

    const rowRenderer = useCallback(() => {
        const rows: React.ReactNode[] = []

        const rowIndexs = range(0, rootProps.rows.length)
        rowIndexs.forEach(rowIndex => {
            const row = rootProps.rows[rowIndex]
            const rowId = tableApi.selector.getRowId(row)
            const selected = tableApi.selector.isRowSelected(rowId)
            rows.push(<TableControlRow key={rowId} row={row} rowId={rowId} rowSelected={selected} />)
        })

        return rows
    }, [rootProps])

    const rows = rowRenderer()

    return (
        <Table ref={forwardedRef} border={rootProps.border}>
            <TableBody inlineScroll={rootProps.inlineScroll}>
                {rootProps.showHeader && <TableControlHeader />}
                {rootProps.loading ? <Loading /> : rows}
            </TableBody>
            {rootProps.pagination && <TableControlFooter {...tableApi.state?.paginationModel} />}
            {children}
        </Table>
    )
})

/** TableControl mixin */
export const TableControl = memo(TableControlRoot)
