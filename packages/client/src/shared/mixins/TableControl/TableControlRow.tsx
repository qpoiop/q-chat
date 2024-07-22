import { forwardRef, useCallback, useMemo } from 'react'
import { CheckBox, TableCell, TableRow } from 'src'
import { useTableApiContext, useTableRootContext } from './TableControl'
import { ITableRowModel } from './TableControl.types'

/** TableControl Row */
export const TableControlRow = forwardRef<HTMLDivElement, ITableRowModel>(function TableControlRow({ row, rowId, rowSelected }, forwardedRef) {
    const rootProps = useTableRootContext()
    const tableApi = useTableApiContext()

    const onRowClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (event?.isPropagationStopped && event.isPropagationStopped()) return
            event.preventDefault()
            event.stopPropagation()
            tableApi.selector.selectRow(rowId, !rowSelected)
        },
        [tableApi, rowSelected],
    )

    const cellRenderer = useMemo(() => {
        const cells = [] as React.ReactNode[]

        rootProps.columns.forEach(column => {
            const { field, columnWidth } = column
            cells.push(
                <TableCell key={field} cellAlign={rootProps.cellAlign} cellWidth={columnWidth} cellBorder={rootProps.cellBorder}>
                    {column.render?.({
                        field: field,
                        id: rowId,
                        row: row,
                        value: row[field],
                    }) || row[field]}
                </TableCell>,
            )
        })

        return cells
    }, [rootProps])

    const checkBoxRenderer = useCallback(() => {
        return (
            <TableCell key={rowId} cellWidth={60}>
                <CheckBox checked={rowSelected} />
            </TableCell>
        )
    }, [rowSelected, onRowClick])

    return (
        <TableRow ref={forwardedRef} onClick={onRowClick} selected={rowSelected}>
            {rootProps.rowSelection && checkBoxRenderer()}
            {cellRenderer}
        </TableRow>
    )
})
