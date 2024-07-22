import useStyled from '@/shared/hooks/useStyled'
import { ISizeProps, IVariantProps, Variant } from '@/shared/core'
import styled from 'styled-components'

export const SSwitch = useStyled('button')<ISizeProps & IVariantProps>`
    ${props => `
        position: relative;
        border-radius: 9999px;
        overflow: hidden;
        border: none;
        &:where(.variant-${props.variant}) {
            // color: ${props.variant == Variant.Default ? props.theme.color.font[props.variant] : props.theme.color.base};
            border: 2px solid ${props.theme.color.font[props.variant]};
            background-color: ${props.theme.color.background[props.variant]};
            &:where(:hover):where(:not(:disabled)) {
                opacity: 0.7;
            }
        }

        &:where(:disabled) {
            opacity: 0.7;
        }
    `}

    
`

// export const StyledSwitchTrack = styled.input.attrs({ type: 'checkbox' })`
//     ${props => `
//         transform: translateX(-100%);
//         background-color: ${props.theme.color.base};
//         pointer-events: none;
//         opacity: 0;
//         margin: 0;
//     `};
// `

export const SSwitchThumb = styled.span`
    ${props => `
        ${props.theme.position.absolute()};
        overflow: hidden;
        width: 50%;
        height: 100%;
        transform: translateX(2%);
        border-radius: 9999px;
        pointer-events: none;
        background-color: ${props.theme.color.base};
        transition: transform 0.2s ease-in-out;
        box-shadow: ${props.theme.color.shadow.default} 0px 5px 5px -3px, ${props.theme.color.shadow.strong} 0px 3px 14px 2px;
        
        &:where(.checked) {
            transform: translateX(100%);
        }
        &:where(:hover) {

        }
    `};
`
