import useStyled from '@/shared/hooks/useStyled'
import { IVariantProps } from '@/shared/core'
import { Box } from '../Box'

export const SListItem = useStyled(Box)<IVariantProps>`
    ${props => `
        width: 100%;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        
        &:where(:hover, .active):not(.disabled) {
            color: ${props.theme.color.font.primary};
        }

        &:where(.disabled) {
            background-color: ${props.theme.color.base};
            color: ${props.theme.color.font.secondary};
            cursor: not-allowed;
        }

        &:where(.size-xl) {
            font-size: ${props.theme.size.font.xl};
        }
        &:where(.size-l) {
            font-size: ${props.theme.size.font.l};
        }
        &:where(.size-m) {
            font-size: ${props.theme.size.font.m};
        }
        &:where(.size-s) {
            font-size: ${props.theme.size.font.s};
        }
        &:where(.size-xs) {
            font-size: ${props.theme.size.font.xs};
        }
    `};
`
