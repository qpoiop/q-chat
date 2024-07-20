import { Box } from '@/shared/components/Box'
import useStyled from '@/shared/hooks/useStyled'
import { IVariantProps, Variant } from '@/shared/core'

export const SHeader = useStyled('header')<IVariantProps>`
    ${props => `
        ${props.theme.position.flex({
            justify: 'flex-start',
            align: 'center',
        })};
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: ${props.theme.layout.headerHeight}px;
        border-bottom: 1px solid ${props.theme.color.border[props.variant]};
        z-index: ${props.theme.zIndex.secondary};

        &:where(.variant-${props.variant}) {
            color: ${props.variant == Variant.Default ? props.theme.color.font[props.variant] : props.theme.color.base};
            background-color: ${props.theme.color.background[props.variant]}
        }
    `}
`

export const SHeaderLeftContents = useStyled(Box)`
    ${props => `
        justify-items: flex-start;
    `};
    
`

export const SHeaderRightContents = useStyled(Box)`
    justify-items: flex-end;
`
