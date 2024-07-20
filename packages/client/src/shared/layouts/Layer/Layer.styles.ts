import { Box } from '@/shared/components/Box'
import styled from 'styled-components'

export const SLayerSlot = styled(Box)`
    ${props => `
        ${props.theme.position.flex({
            direction: 'column',
            justify: 'flex-start',
            align: 'flex-start',
        })};
        background-color: ${props.theme.color.background.default};
    `};
`
