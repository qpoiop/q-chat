import styled from 'styled-components'
import { Overlay } from '../Overlay'

export const SPopOverContainer = styled.div`
    position: relative;
    width: 100%;
    flex: 1;
`

export const SPopOverTrigger = styled.button`
    ${props => `
        ${props.theme.position.flex({
            justify: 'space-between',
        })};
        width: 100%;
        padding: 0.438rem 0.55rem;
        border-radius: 0.188rem;
        height: 35px;
        cursor: pointer;
        border: 1px solid ${props.theme.color.border.default};
        background: ${props.theme.color.background.default};
        box-shadow: 0px 2px 4px 1px rgba(238, 238, 238, 0.25);
        &:where(:focus) {
            border: 1px solid ${props.theme.color.border.secondary};
        }
    `};
    user-select: none;
`

export const SPopOverOverlay = styled(Overlay)`
    bottom: auto;
    right: auto;
    min-width: 100%;
    min-height: 80px;
    max-height: 640px;
    max-width: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1rem 0.3rem;
`
