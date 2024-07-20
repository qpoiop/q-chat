import useStyled from '@/shared/hooks/useStyled'
import { IVariantProps, Variant } from '@/shared/core'

export const SSideBar = useStyled('nav')<IVariantProps>`
    ${props => `
        position: sticky;
        ${props.theme.position.flex({
            direction: 'column',
            justify: 'flex-start',
            align: 'flex-start',
        })};
        left: 0;
        top: 0;
        height: 100%;
        border-right: 1px solid ${props.theme.color.border[props.variant]};
        z-index: ${props.theme.zIndex.primary};
        &:where(.variant-${props.variant}) {
            color: ${props.variant == Variant.Default ? props.theme.color.font[props.variant] : props.theme.color.base};
            background-color: ${props.theme.color.background[props.variant]};
        }
        &:where(.collapse) {
            width: 2rem !important;
        }
        transition: width .2s ease-out;
    `};
`
