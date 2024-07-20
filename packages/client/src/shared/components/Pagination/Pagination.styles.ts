import { Box, Button } from '@/shared/components'
import styled from 'styled-components'

export const SPagination = styled(Box)`
    ${props => `
        ${props.theme.position.flex()};
        position: relative;
        flex-wrap: nowrap;
    `};
`
export const SPaginationToolbar = styled.div``
export const SPaginationRange = styled.div`
    ${props => `
        ${props.theme.position.flex()};
    `};
`
export const SPaginationItem = styled(Button)`
    flex-wrap: nowrap;
    ${props => `
        padding: 0.3rem;
        margin: .2rem;
        font-weight: ${props.theme.font.weight.semiBold};
    `};
`

export const SPaginationLabelDisplayedRows = styled.span``
export const SPaginationOffsetSelector = styled.div``

export const SPaginationLeftItem = styled(SPaginationItem)``
export const SPaginationRightItem = styled(SPaginationItem)``
