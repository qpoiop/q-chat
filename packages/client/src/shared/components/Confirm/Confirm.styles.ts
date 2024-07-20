import { Button } from 'src'
import styled from 'styled-components'

export const SModalBackground = styled.div`
    ${props => `
        position: fixed;
        inset: 0;    
        box-sizing: border-box;
        z-index: ${props.theme.zIndex.modal};
        background-color: ${props.theme.color.shadow.default};
        opacity: 0.7;
    `};
`
export const SModalContent = styled.div`
    ${props => `
        ${props.theme.position.flex({
            direction: 'column',
        })};
        z-index: ${props.theme.zIndex.modal};
        overflow-y: auto;
        background-color: ${props.theme.color.base};
        box-shadow: ${props.theme.color.shadow.default} 0px 5px 5px -3px, ${props.theme.color.shadow.strong} 0px 3px 14px 2px;
        min-width: 50%;
        min-height: 50%;
        
`};
`
export const SModalHeader = styled.div`
    ${props => `
        ${props.theme.position.flex({
            direction: 'column',
            align: 'flex-start',
        })};
        width: 100%;
        position: relative;
        padding: 1rem;
        min-height: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid ${props.theme.color.border.default};
    `};
`
export const SModalClose = styled(Button)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`
export const SModalFooter = styled.div`
    ${props => `
        ${props.theme.position.flex()};
        width: 100%;
        padding: 1rem;
        border-top: 1px solid ${props.theme.color.border.default};
        box-sizing: border-box;
    `};
`
