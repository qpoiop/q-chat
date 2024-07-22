import useStyled from '@/shared/hooks/useStyled'

export const SDivider = useStyled()<{ $thickness?: number; $indentation?: number }>`
    margin: 0;
    ${props => `
        background-color: ${props.theme.color.border.default};
        &:where(.direction-horizontal) {
            height: 100%;
            width: ${props?.$thickness || 1}px;
            margin-left: ${props?.$indentation + 'px' || props.theme.spacing.m};
            margin-right: ${props?.$indentation + 'px' || props.theme.spacing.m};
        }
        
        &:where(.direction-vertical) {
            width: 100%;
            height: ${props?.$thickness || 1}px;
            margin-top: ${props?.$indentation + 'px' || props.theme.spacing.m};
            margin-bottom: ${props?.$indentation + 'px' || props.theme.spacing.m};
        }
    `};
`
