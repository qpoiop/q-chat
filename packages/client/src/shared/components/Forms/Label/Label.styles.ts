import useStyled from '@/shared/hooks/useStyled'
import { ISizeProps } from '@/shared/core'

export const SLabel = useStyled('label')<ISizeProps>`
    ${props => `
        ${props.theme.position.flex({
            justify: 'flex-start',
            align: 'center',
        })};
        color: ${props.theme.color.font.default};
        font-weight: ${props.theme.font.weight.semiBold};
        // height: 100%;
        margin-right: 0.75rem;
        
        &:where(:disabled) {
            
        }
        
        &:where(.size-${props.size}) {
            font-size: ${props.theme.size.font[props.size]};
        }
        
    `}
`
