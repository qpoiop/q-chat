import useStyled from '@/shared/hooks/useStyled'
import { ISizeProps, IVariantProps } from '@/shared/core'

export const SText = useStyled('span')<IVariantProps & ISizeProps & { $truncated: number }>`
    ${props =>
        `
        ${props.theme.position.flex({ justify: 'flex-start', align: 'center' })};
        line-height: ${props.theme.font.lineHeight.m};
        &:where(.truncated) {
            ${props.theme.text.truncated};
            &:where(.multi-line) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: ${props.$truncated};

                &:where(.size-${props.size}) {
                    max-height: calc(${props.$truncated * props.theme.font.lineHeight[props.size]}rem);
                }
            }
        }
        
        &:where(.variant-${props.variant}) {
            color: ${props.theme.color.font[props.variant]};
        }
        
        &:where(.size-${props.size}) {
            font-size: ${props.theme.size.font[props.size]};
        }
    `};
`
