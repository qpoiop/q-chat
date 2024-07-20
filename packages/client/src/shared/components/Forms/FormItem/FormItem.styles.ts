import { Stack } from '@/shared/components/Stack'
import useStyled from '@/shared/hooks/useStyled'
import styled from 'styled-components'

export const SFormItem = useStyled()`
    ${props => `
        ${props.theme.position.flex()};
        padding: .5rem;
        flex: 1;
    `};
`

export const SFormStack = styled(Stack)`
    & > label {
        min-width: 70px;
    }
`
