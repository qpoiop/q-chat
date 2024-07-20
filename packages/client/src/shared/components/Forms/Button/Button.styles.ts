import useStyled from '@/shared/hooks/useStyled'
import { IVariantProps, Variant } from '@/shared/core'

export const SButton = useStyled('button')<IVariantProps>`
    ${props => `
        ${props.theme.position.flex()};
        cursor: pointer;
        padding: .55rem;
        min-height: 1.5rem;

        font-weight: ${props.theme.font.weight.semiBold};
        border: 1px solid transparent;
        background-color: transparent;
        border-radius: 4px;
        
        &:where(.variant-${props.variant}) {
            color: ${props.theme.color.font[props.variant]};
            &:where(.fill) {
                color: ${props.variant == Variant.Default ? props.theme.color.font[props.variant] : props.theme.color.base};
                background-color: ${props.theme.color.background[props.variant]};
                &:where(:hover):where(:not(:disabled)) {
                    opacity: 0.7;
                }
            }
            &:where(.outline) {
                border: 1px solid ${props.theme.color.border[props.variant]};
            }
        }

        &:where(:hover) {
            transition: background-color 0.2s linear;
        }

        &.where(svg) {
            margin-right: 0.313rem;
            font-size: ${props.theme.size.font.m};
        }
        
        &:where(:disabled) {
            cursor: default;
            opacity: 0.7;
        }

    `};
`
