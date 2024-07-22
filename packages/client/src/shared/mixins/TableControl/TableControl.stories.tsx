import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { Box, HAlign } from 'src'
import { TableControl } from './TableControl'
import { IPaginationModel } from './TableControl.types'

const meta = {
    component: TableControl,
    argTypes: {
        cellAlign: {
            control: 'radio',
            options: Object.values(HAlign),
        },
    },
} satisfies Meta<typeof TableControl>

export default meta

type Story = StoryObj<typeof TableControl>

const TABLE_ROWS = [
    { sequence: 1, id: 'random id 1', name: 'qpoiop' },
    { sequence: 2, id: 'random id 2', name: 'jason' },
    { sequence: 3, id: 'random id 3', name: 'benny' },
    { sequence: 4, id: 'random id 4', name: 'peter' },
    { sequence: 5, id: 'random id 5', name: 'john' },
    { sequence: 6, id: 'random id 1', name: 'qpoiop' },
    { sequence: 7, id: 'random id 2', name: 'jason' },
    { sequence: 8, id: 'random id 3', name: 'benny' },
    { sequence: 9, id: 'random id 4', name: 'peter' },
    { sequence: 10, id: 'random id 5', name: 'john' },
    { sequence: 11, id: 'random id 1', name: 'qpoiop' },
    { sequence: 12, id: 'random id 2', name: 'jason' },
    { sequence: 13, id: 'random id 3', name: 'benny' },
    { sequence: 14, id: 'random id 4', name: 'peter' },
    { sequence: 15, id: 'random id 5', name: 'john' },
]

const TABLE_COLUMNS = [
    { field: 'sequence', columnWidth: 50, header: 'No' },
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
]

const Template: StoryFn<typeof TableControl> = ({ rows, columns, ...args }) => {
    const [paginationModel, setPaginationModel] = useState<IPaginationModel>({
        page: 1,
        offset: 10,
        totalCount: 15,
    })

    const onChangePage = useCallback((page: number) => {
        setPaginationModel(prev => ({
            ...prev,
            page,
        }))
    }, [])

    const onChangeOffset = useCallback((offset: number) => {
        setPaginationModel(prev => ({
            ...prev,
            offset,
        }))
    }, [])

    return (
        <Box style={{ width: 900, height: 500 }}>
            <TableControl
                {...args}
                paginationModel={paginationModel}
                rows={rows}
                columns={columns}
                onPageChange={onChangePage}
                onOffsetChange={onChangeOffset}
            />
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        loading: false,
        pagination: false,
        showHeader: true,
        pinnedHeader: true,
        inlineScroll: true,
        rowSelection: false,
        defaultRowSelection: [],
        border: true,
        cellAlign: HAlign.Left,
        cellBorder: false,
        paginationModel: {
            page: 0,
            offset: 15,
            totalCount: 100,
        },
        offsetOptions: [10, 15, 30],
        uniqueKey: 'sequence',
        rows: TABLE_ROWS,
        columns: TABLE_COLUMNS,
    },
}

export const WithRowSelection: Story = {
    render: Template,
    args: {
        loading: false,
        pagination: false,
        showHeader: true,
        cellAlign: HAlign.Left,
        pinnedHeader: true,
        inlineScroll: true,
        rowSelection: true,
        defaultRowSelection: [1, 2],
        border: true,
        cellBorder: false,
        offsetOptions: [10, 15, 30],
        uniqueKey: 'sequence',
        rows: TABLE_ROWS,
        columns: TABLE_COLUMNS,
    },
}

export const WithPagination: Story = {
    render: Template,
    args: {
        loading: false,
        pagination: true,
        showHeader: true,
        pinnedHeader: true,
        inlineScroll: true,
        rowSelection: false,
        border: true,
        cellAlign: HAlign.Left,
        cellBorder: false,
        paginationModel: {
            page: 0,
            offset: 15,
            totalCount: 100,
        },
        offsetOptions: [10, 15, 30],
        uniqueKey: 'sequence',
        rows: TABLE_ROWS,
        columns: TABLE_COLUMNS,
    },
}
