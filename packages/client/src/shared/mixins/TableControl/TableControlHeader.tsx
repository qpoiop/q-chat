import { forwardRef, useCallback, useMemo } from 'react'
import { CheckBox, TableCell, TableHeader } from 'src'
import { useTableApiContext, useTableRootContext } from './TableControl'
import { ITableKey } from './TableControl.types'

export const TableControlHeader = forwardRef<HTMLDivElement>(function TableControlHeader({}, forwardedRef) {
    const rootProps = useTableRootContext()

    const HeaderRenderer = useMemo(() => {
        const cells = [] as React.ReactNode[]
        rootProps.columns.forEach(column => {
            const { field, columnWidth } = column
            cells.push(
                <TableCell key={field} cellAlign={rootProps.cellAlign} cellWidth={columnWidth} cellBorder={rootProps.cellBorder}>
                    {column.header}
                </TableCell>,
            )
        })

        return cells
    }, [rootProps])

    return (
        <TableHeader ref={forwardedRef} pinned={rootProps.pinnedHeader}>
            {rootProps.rowSelection && <TableControlHeaderCheckBox />}
            {HeaderRenderer}
        </TableHeader>
    )
})

/** TODO: checkbox indeterminate 처리 */
const TableControlHeaderCheckBox = forwardRef<HTMLDivElement>(function TableControlHeaderCheckBox({}, forwardedRef) {
    const tableApi = useTableApiContext()
    const rootProps = useTableRootContext()

    /** TODO: 추후 Pagination 시 기존 체크 상태 보관을 위해 값 분리 */
    const avaliableRowIds = useMemo(() => {
        const ids = tableApi.selector.getRowIds()
        return ids.reduce<Record<ITableKey, true>>((acc, cur) => {
            const rowId = cur
            acc[rowId] = true
            return acc
        }, {})
    }, [rootProps.rows])

    const isChecked = useMemo(() => {
        const filteredSelection = tableApi.state.rowSelection.filter(id => avaliableRowIds[id])
        return filteredSelection.length == Object.keys(avaliableRowIds).length
    }, [tableApi.state.rowSelection])

    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            event.stopPropagation()
            const ids = tableApi.selector.getRowIds()
            tableApi.selector.selectRows(ids, !isChecked)
        },
        [isChecked],
    )

    return (
        <TableCell ref={forwardedRef} key="checkbox" cellWidth={60}>
            <CheckBox checked={isChecked} onCheck={onChangeHandler} />
        </TableCell>
    )
})
