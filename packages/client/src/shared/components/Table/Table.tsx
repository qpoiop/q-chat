import classNames from 'classnames'
import { forwardRef } from 'react'
import { HAlign } from '@/shared/core'
import { STableBody, STableCell, STableContainer, STableFooter, STableHeader, STableRow } from './Table.styles'
import { ITableBodyProps, ITableCellProps, ITableFooterProps, ITableHeaderProps, ITableProps, ITableRowProps } from './Table.types'

/** Table Component */
export const Table = forwardRef<HTMLDivElement, ITableProps>(function Table({ border = true, className, style, children }, forwardedRef) {
    return (
        <STableContainer ref={forwardedRef} style={{ ...style }} className={classNames(border && `border`, className)}>
            {children}
        </STableContainer>
    )
})

/** Table Header Component */
export const TableHeader = forwardRef<HTMLDivElement, ITableHeaderProps>(function TableHeader(
    { children, pinned = true, style, className },
    forwardedRef,
) {
    return (
        <STableHeader style={style} className={classNames(pinned && `pinned`, className)}>
            <STableRow ref={forwardedRef}>{children}</STableRow>
        </STableHeader>
    )
})

/** Table Body Component */
export const TableBody = forwardRef<HTMLDivElement, ITableBodyProps>(function TableBody(
    { inlineScroll = true, children, style, className },
    forwardedRef,
) {
    return (
        <STableBody ref={forwardedRef} style={style} className={classNames(inlineScroll && `overflow`, className)}>
            {children}
        </STableBody>
    )
})

/** Table Row Component */
export const TableRow = forwardRef<HTMLDivElement, ITableRowProps>(function TableRow(
    { onClick, selected = false, children, style, className },
    forwardedRef,
) {
    return (
        <STableRow ref={forwardedRef} onClick={onClick} style={style} className={classNames(selected && `selected`, className)}>
            {children}
        </STableRow>
    )
})

/** Table Cell Component */
export const TableCell = forwardRef<HTMLDivElement, ITableCellProps>(function TableCell(
    { cellWidth, cellAlign = HAlign.Center, cellBorder = false, style, children, className },
    forwardedRef,
) {
    return (
        <STableCell
            ref={forwardedRef}
            style={style}
            cellwidth={cellWidth}
            className={classNames(`align-${cellAlign}`, cellBorder && `border`, className)}
        >
            {children}
        </STableCell>
    )
})

/** Table Footer Component */
export const TableFooter = forwardRef<HTMLDivElement, ITableFooterProps>(function TableFooter({ style, children, className }, forwardedRef) {
    return (
        <STableFooter ref={forwardedRef} style={style} className={classNames(className)}>
            {children}
        </STableFooter>
    )
})
