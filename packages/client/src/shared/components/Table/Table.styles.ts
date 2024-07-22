import useStyled from '@/shared/hooks/useStyled'
import styled from 'styled-components'
import { ITableFooterProps, ITableHeaderProps } from './Table.types'

export const STableContainer = styled.div`
    ${props => `
        ${props.theme.position.flex({
            direction: 'column',
            justify: 'flex-start',
        })};
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        background-color: ${props.theme.color.background.default};
        &:where(.border) {
            // border: 1px solid ${props.theme.color.border.default};
            border-radius: 4px;
        
            ${STableRow}:not(:first-child) {
                border-bottom: 1px solid ${props.theme.color.border.default};
            }
        }
    `};
`

export const STableBody = styled.div`
    ${props => `
        ${props.theme.position.flex({ direction: 'column', align: 'flex-start', justify: 'flex-start' })};
        height: 100%;
        width: 100%;
        flex: 1;

        &:where(.overflow) {
            overflow-y: auto;
        }
    `};
`
export const STableRow = styled.div`
    ${props => `
        ${props.theme.position.flex()};
        width: 100%;
        box-sizing: border-box;
        background-color: inherit;
        color: ${props.theme.color.font.default};

        &:where(.selected) {
            background-color: ${props.theme.color.base};
        }

        &:where(:hover) {
            background-color: ${props.theme.color.base};
        }
    `};
`

export const STableCell = useStyled()<{ cellwidth?: number }>`
    ${props => `
        ${props.theme.position.flex()};
        ${props.cellwidth ? `flex-basis: ${props.cellwidth}px` : `flex: 1`};
        font-size: ${props.theme.size.font.s};
        min-height: 3rem;
        height: 100%;
        padding: 0.2rem;
        &:not(:first-child):where(.border) {
            border-left: 1px solid ${props.theme.color.border.default};
        }

        &:where(.align-center) {
            align-items: center;
            justify-content: center;
        }

        &:where(.align-left) {
            align-items: left;
            justify-content: flex-start;
        }

        &:where(.align-right) {
            align-items: right;
            justify-content: flex-end;
        }
    `};
`

export const STableHeader = useStyled()<ITableHeaderProps>`
    ${props => `
        top: 0;
        width: 100%;
        position: relative;
        background-color: ${props.theme.color.base};
        z-index: ${props.theme.zIndex.secondary};
        font-weight: ${props.theme.font.weight.semiBold};
        border-top: 1px solid ${props.theme.color.border.default};
        border-bottom: 1px solid ${props.theme.color.border.default};

        &:where(.pinned) {
            position: sticky;
        }  
        &:where(:hover) {
            & > ${STableRow} {
                background-color: inherit;
            }
        }

    `};
`

export const STableFooter = useStyled()<ITableFooterProps>`
    ${props => `
        ${props.theme.position.flex()};
        width: 100%;
        padding: .5rem 1rem;
        bottom: 1rem;
        position: sticky;
        box-sizing: border-box;
        margin: 1rem 0;
        background-color: ${props.theme.color.base};
        border: 1px solid ${props.theme.color.border.default};
        border-radius: 8px;
        box-shadow: ${props.theme.color.shadow.default} 1px 2px 1px -3px, ${props.theme.color.shadow.strong} 5px 5px 14px -4px;

        &:where(:hover) {
            border: 1px solid ${props.theme.color.border.secondary};
        }
    `};
`
