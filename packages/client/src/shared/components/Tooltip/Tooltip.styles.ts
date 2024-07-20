import useStyled from '@/shared/hooks/useStyled'
import { IVariantProps, Variant } from '@/shared/core'
import styled from 'styled-components'

export const STooltipWrapper = styled.div``
export const STooltip = styled.div`
    display: inline-block;
`
export const STooltipTrigger = styled.div`
    ${props => `
        width: 100%;
        line-height: ${props.theme.font.lineHeight.l};
        `};
`
export const STooltipContent = useStyled('span')<IVariantProps & { $show: boolean }>`
    ${props => `
        display: ${props.$show ? `block` : `none`};
        position: absolute;
        min-width: 10rem;
        width: 100%;
        padding: .3rem;
        border-radius: 4px;
        box-shadow: 1px 2px 5px ${props.theme.color.shadow.default};
        z-index: ${props.theme.zIndex.tooltip};
        
        &:where(.variant-${props.variant}) {
            border: 1px solid ${props.theme.color.border[props.variant]};
            background-color:  ${props.theme.color.background[props.variant]};
            span {
                color:  ${props.variant == Variant.Default ? props.theme.color.font.default : props.theme.color.base};
            }
        }
    `};
`
