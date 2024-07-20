import { Label } from 'src'
import styled from 'styled-components'

export const SRadio = styled.div`
    ${props => `
        display: flex;
        input[type='radio'] {
            -webkit-appearance: none;
            width: 1rem;
            height: 1rem;
            margin-right: 0.313rem;
            padding: 0;
            border-radius: 50%;
            outline: none;
            border: 1px solid ${props.theme.color.border.default};
            background: ${props.theme.color.background.default};
            cursor: pointer;

            &::before {
                content: '';
                display: block;
                width: 4px;
                height: 4px;
                margin: 4px auto;
                border-radius: 50%;
            }

            &:where(:checked) {
                border: 1px solid ${props.theme.color.border.primary};
                background-color: ${props.theme.color.background.primary};

                &::before {
                    background: ${props.theme.color.base};
                }
            }
        }

        & > ${Label} {
            display: flex;
            align-items: center;
            margin: 0 1rem 0 0;
            cursor: pointer;
        }
    `};
`
