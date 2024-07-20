import { Button } from '@/shared/components'
import { ISizeProps } from '@/shared/core'
import useStyled from '@/shared/hooks/useStyled'
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
export const SModal = useStyled()<ISizeProps>`
    ${props => `
        ${props.theme.position.flex({
            direction: 'column',
            justify: 'flex-start',
            align: 'flex-start',
        })};
        z-index: ${props.theme.zIndex.modal};
        overflow-y: auto;
        border-radius: 4px;
        background-color: ${props.theme.color.background.default};
        box-shadow: ${props.theme.color.shadow.default} 0px 5px 5px -3px, ${props.theme.color.shadow.strong} 0px 3px 14px 2px;
        box-sizing: border-box;
        
`};
`

export const SModalContent = styled.div`
    ${props => `
        ${props.theme.position.flex({
            direction: 'column',
            justify: 'flex-start',
            align: 'flex-start',
        })};
        width: 100%;
        height: 100%;
        flex-grow: 1;
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
        box-sizing: border-box;
        border-bottom: 1px solid ${props.theme.color.border.default};
    `};
`

// TODO: change to Close icon
export const SModalClose = styled(Button)`
    position: absolute;
    right: 1rem;
`

export const SModalFooter = styled.div`
    ${props => `
        ${props.theme.position.flex()};
        width: 100%;
        padding: 1rem;
        position: sticky;
        bottom: 0;
        border-top: 1px solid ${props.theme.color.border.default};
        box-sizing: border-box;
    `};
`
