import styled from 'styled-components'

export const SOverlayContainer = styled.div`
    ${props => `
        z-index: ${props.theme.zIndex.modal};
        position: fixed;
        inset: 0;
        &:where(.hidden) {
            pointer-events: none;
        }
    `};
`

export const SOverlayWrapper = styled.div`
    ${props => `
        position: relative;
        z-index: ${props.theme.zIndex.primary};
    `};
`

export const SOverlay = styled.div`
    ${props => `
        ${props.theme.position.flex()};
        ${props.theme.position.absolute()};
        z-index: ${props.theme.zIndex.modal};
        opacity: 1;
        transition: .5s opacity ease-in-out;
        background-color: ${props.theme.color.background.default};
        box-shadow: ${props.theme.color.shadow.default} 1px 2px 1px -3px, ${props.theme.color.shadow.strong} 5px 5px 14px -4px;
        border-radius: 4px;

        &:where(.border) {
            border: 1px solid ${props.theme.color.border.default};
        }

        &:where(.hidden) {
            opacity: 0;
        }
    `};
`
