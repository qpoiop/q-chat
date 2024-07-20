import { styled } from 'styled-components'

export const STextArea = styled.textarea`
    ${props => `
        width: 100%;
        min-height: 1.75rem;
        padding: 0.5rem;
        background: ${props.theme.color.background.default};
        border: 1px solid ${props.theme.color.border.default};
        resize: none;

        &:where(.resize) {
            resize: both;
        }
        &:where(:disabled) {
            opacity: 0.7;
        }
    `};
`
