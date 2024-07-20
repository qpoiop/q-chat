import styled from 'styled-components'

export const SInputWrapper = styled.div`
    ${props => `
        ${props.theme.position.flex({
            justify: 'flex-start',
        })}; 
        flex: 1;
        width: 100%;
        height: 35px;
        border: 1px solid ${props.theme.color.border.default};
        background: ${props.theme.color.background.default};
        color: ${props.theme.color.font.default};
        padding: 0.438rem 0.55rem;
        &:where(:focus) {
            border: 1px solid ${props.theme.color.border.secondary};
        }
        &:where(:disabled) {
            opacity: 0.7;
        }
    `};
`

export const SInput = styled.input`
    ${props => `
        flex: 1;
        font-size: ${props.theme.size.font.m};
        background-color: transparent;
        color: currentColor;
        ${props.theme.text.truncated};        
        &:where(::placeholder) {
            vertical-align: middle;
        }
    `};
    // line-height: 1.875rem;
    border-radius: 0.188rem;
    outline: none;
    margin: 0 0.33rem;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    &:autofill,
    &:autofill:hover,
    &:autofill:focus,
    &:autofill:active {
        -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
    }
    //input[type='date']:not(.has-value):before {
    //    color: lightgray;
    //    content: attr(placeholder);
    //}
`
