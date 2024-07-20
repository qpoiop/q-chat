import useStyled from '@/shared/hooks/useStyled'
import { ISizeProps, IVariantProps } from '@/shared/core'

export const SIcon = useStyled('p')<IVariantProps & ISizeProps>`
    ${props => `
        ${props.theme.position.flex()};
        vertical-align: middle;
        align-self: center;
        padding: .5rem;
        &:where(.size-xl) {
            & :is(svg) {
                width: 2rem;
                height: 2rem;
            }
        }
        &:where(.size-l) {
            & :is(svg) {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        &:where(.size-m) {
            & :is(svg) {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
        &:where(.size-s) {
            & :is(svg) {
                width: 1rem;
                height: 1rem;
            }
        }
        &:where(.size-xs) {
            & :is(svg) {
                width: 0.8rem;
                height: 0.8rem;
            }
        }

        &:where(.variant-${props.variant}) {
            &: is(svg) {
                color: ${props.theme.color.font[props.variant]};
            }
            &:where(.fill) {
                background-color: ${props.theme.color.background[props.variant]};
            }
            &:where(.outline) {
                border: 1px solid ${props.theme.color.border[props.variant]};
            }
        }
        & :is(svg) {
            font-size: ${props.theme.size.font.m};
        }

        &:where(.circle) {
            border-radius: 50%;
        }
        &:where(.shadow) {
            box-shadow: ${props.theme.color.shadow.strong} 0px 0px 11px -2px;
        }
    `};
`
