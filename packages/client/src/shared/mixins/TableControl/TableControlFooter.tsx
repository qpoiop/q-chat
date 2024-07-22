import { forwardRef, useCallback, useMemo } from 'react'
import { Box, Label, Pagination, Stack, Text } from 'src'
import { STableFooter } from '@/shared/components/Table/Table.styles'
import { Position, Size } from '@/shared/core'
import { SelectControl } from '../SelectControl/SelectControl'
import { ISelectControlItem } from '../SelectControl/SelectControl.types'
import { useTableApiContext, useTableRootContext } from './TableControl'
import { IPaginationModel } from './TableControl.types'

export const TableControlFooter = forwardRef<HTMLDivElement, IPaginationModel>(function TableControlFooter(
    { page = 1, offset = 10, totalCount = 0 },
    forwardedRef,
) {
    const tableApi = useTableApiContext()
    const rootProps = useTableRootContext()

    const labelDisplayedRows = useMemo(() => {
        const from = (page - 1) * offset + 1
        const to = Math.min(totalCount, page * offset)

        return `Showing ${from}-${to} of ${totalCount} Results`
    }, [page, offset, totalCount])

    const offsetOptions = useMemo(() => {
        return rootProps?.offsetOptions.map(option => ({ value: option.toString() }))
    }, [rootProps])

    const onChangeOffset = useCallback(
        (offset: ISelectControlItem) => {
            tableApi.selector.changeOffset(Number(offset.value))
        },
        [tableApi],
    )

    const onChangePage = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
            e.preventDefault()
            tableApi.selector.setPage(page)
        },
        [tableApi],
    )

    return (
        <STableFooter ref={forwardedRef}>
            <Stack align={Position.Center} justify={Position.Between}>
                {/* Toolbar 좌측 영역 */}
                <Text size={Size.XS}>{labelDisplayedRows}</Text>

                <Pagination page={page} offset={offset} totalCount={totalCount} onPageChange={onChangePage} />

                {/* Toolbar 우측 영역 */}
                <Box center>
                    <Label size={Size.XS}> Result per Page </Label>
                    <SelectControl value={offset.toString()} items={offsetOptions} onSelect={onChangeOffset} />
                </Box>
            </Stack>
        </STableFooter>
    )
})
