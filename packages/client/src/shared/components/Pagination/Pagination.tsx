import { Stack, Text } from '@/shared/components'
import { Position, Size, Variant, range } from '@/shared/core'
import { forwardRef, useCallback, useMemo } from 'react'
import { SPagination, SPaginationItem, SPaginationLeftItem, SPaginationRange, SPaginationRightItem } from './Pagination.styles'
import { IPaginationProps } from './Pagination.types'

/** Pagination component */
export const Pagination = forwardRef<HTMLDivElement, IPaginationProps>(function PaginationItem(
    { page = 1, pageSize = 5, totalCount = 0, onPageChange, border = false, offset = 10 },
    forwardedRef,
) {
    const onChangeHandler = useCallback(
        (willChangePage: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
            onPageChange(event, willChangePage)
        },
        [page],
    )

    const totalPage = useMemo(() => {
        if (offset > 0 && totalCount > 0) return Math.ceil(totalCount / offset)
        else return 1
    }, [totalCount, offset])

    const firstPageInSize = useMemo(() => Math.floor(page / pageSize) * pageSize + 1, [pageSize, page])
    const lastPageInSize = useMemo(() => Math.max(1, totalPage), [totalPage])

    const pageRenderer = useCallback(() => {
        const pages: React.ReactNode[] = []

        const pageIndexs = range(firstPageInSize, firstPageInSize + pageSize)
        pageIndexs
            .filter(idx => idx <= lastPageInSize)
            .forEach((idx: number) => {
                pages.push(
                    <SPaginationItem
                        key={idx}
                        onClick={onChangeHandler(idx)}
                        outline={border}
                        variant={idx == page ? Variant.Primary : Variant.Default}
                        size={Size.XS}
                    >
                        {idx.toString()}
                    </SPaginationItem>,
                )
            })

        return pages
    }, [page, firstPageInSize, lastPageInSize, border])

    const pages = pageRenderer()

    return (
        <SPagination ref={forwardedRef} border={border}>
            <Stack justify={Position.Center} align={Position.Center}>
                <SPaginationLeftItem onClick={onChangeHandler(firstPageInSize)} outline={border} fill={border}>
                    <Text size={Size.XS}>◀ Previouse</Text>
                </SPaginationLeftItem>
                <SPaginationRange> {pages}</SPaginationRange>
                <SPaginationRightItem onClick={onChangeHandler(Math.min(firstPageInSize + pageSize, lastPageInSize))} outline={border} fill={border}>
                    <Text size={Size.XS}>Next ▶</Text>
                </SPaginationRightItem>
            </Stack>
        </SPagination>
    )
})
