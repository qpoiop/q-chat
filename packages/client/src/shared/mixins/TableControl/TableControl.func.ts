import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { HAlign, isFunction } from '@/shared/core'
import { ITableApiModel, ITableControlProps, ITableData, ITableKey } from './TableControl.types'

const DEFAULT_PROPS: ITableControlProps = {
    rows: [],
    columns: [],
    defaultRowSelection: [],
    rowSelection: true,
    showHeader: true,
    cellAlign: HAlign.Center,
    pinnedHeader: true,
    loading: false,
    border: true,
    cellBorder: false,
    uniqueKey: 'id',
    inlineScroll: true,
    pagination: false,
    paginationModel: {
        page: 1,
        offset: 10,
        totalCount: 0,
    },
    offsetOptions: [10, 15, 20],
}

export const initializeProps = <R extends ITableData = any>(props: ITableControlProps<R>) => {
    const rootProps = useMemo<ITableControlProps<R>>(
        () => ({
            ...DEFAULT_PROPS,
            ...props,
        }),
        [props],
    )

    return rootProps
}

export const registerApi = <R extends ITableData = any>(rootProps: ITableControlProps<R>) => {
    const tableRef = useRef({
        state: null,
        setState: null,
        selector: null,
    }) as React.MutableRefObject<ITableApiModel>
    const firstRender = useRef<boolean>(true)

    const [, reRender] = useState<ITableApiModel['state']>()
    const forceUpdate = useCallback(() => reRender(() => tableRef.current.state), [tableRef])
    const setState = useCallback<ITableApiModel['setState']>(
        state => {
            let newState: ITableApiModel['state']
            if (isFunction(state)) newState = state(tableRef.current.state)
            else newState = state

            if (tableRef.current.state === newState) return false
            tableRef.current.state = newState
        },
        [tableRef],
    )

    // const rowSelection = useMemo(() => props?.rowSelection ?? [], [tableRef, props.rowSelection])
    const getRowId = useCallback((row: R) => row[rootProps.uniqueKey] as ITableKey, [tableRef, rootProps.uniqueKey])
    const getRowIds = useCallback(() => tableRef.current.state.rows.map((row: R) => getRowId(row)), [tableRef])
    const isRowSelected = useCallback((id: ITableKey) => tableRef.current.state.rowSelection.includes(id), [tableRef])
    const selectRow = useCallback(
        (id: ITableKey, isSelected = true) => {
            if (!rootProps.rowSelection) return
            const newSelection: ITableKey[] = tableRef.current.state.rowSelection.filter(el => el !== id)
            if (isSelected) newSelection.push(id)

            tableRef.current.setState(state => ({ ...state, rowSelection: newSelection }))
            rootProps.onRowSelect?.(newSelection)
            forceUpdate()
        },
        [tableRef],
    )

    const selectRows = useCallback(
        (ids: ITableKey[], isSelected = true) => {
            if (!rootProps.rowSelection) return
            if (isSelected) tableRef.current.setState(state => ({ ...state, rowSelection: ids }))
            // TODO: 전체 선택/해제가 아닌 부분 멀티 셀렉션(페이지네이션 시)  로직 추가 필요
            else tableRef.current.setState(state => ({ ...state, rowSelection: [] }))
            forceUpdate()
        },
        [tableRef],
    )

    const setPage = useCallback(
        (page: number) => {
            rootProps.onPageChange?.(page)
            tableRef.current.setState(state => ({
                ...state,
                paginationModel: {
                    ...state.paginationModel,
                    page,
                },
            }))
        },
        [tableRef],
    )

    const changeOffset = useCallback(
        (offset: number) => {
            rootProps.onOffsetChange?.(offset)
            tableRef.current.setState(state => ({
                ...state,
                paginationModel: {
                    ...state.paginationModel,
                    offset,
                },
            }))
        },
        [tableRef],
    )

    // initailization
    if (firstRender.current) {
        tableRef.current.setState = setState
        tableRef.current.selector = {
            getRowId,
            getRowIds,
            isRowSelected,
            selectRow,
            selectRows,
            setPage,
            changeOffset,
        }

        tableRef.current.setState(prev => ({
            ...prev,
            columns: rootProps.columns,
            rows: rootProps.rows,
            rowSelection: rootProps?.defaultRowSelection,
            paginationModel: rootProps?.paginationModel,
        }))
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }

        tableRef.current.setState(prev => ({
            ...prev,
            columns: rootProps?.columns,
            rows: rootProps?.rows,
            rowSelection: rootProps?.defaultRowSelection,
            paginationModel: rootProps?.paginationModel,
        }))
    }, [rootProps.columns, rootProps.rows, rootProps.rowSelection, rootProps?.paginationModel])

    return tableRef
}
