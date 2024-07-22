import { Label } from '@/shared/components'
import { styled } from 'styled-components'

export const SCheckBox = styled.div`
    ${props => `
        display: flex;
        input[type='checkbox'] {
            position: relative;
            width: 1rem;
            height: 1rem;
            margin-right: 0.313rem;
            padding: 0;
            outline: none;
            border-radius: 2px;
            background: ${props.theme.color.background.default};
            border: 1px solid ${props.theme.color.border.default};
            cursor: pointer;
            -webkit-appearance: none;
    
            // checked 속성은 즉시 렌더링 되지 않아 데이터 기반의 className으로 설정
            &:is(.checked) {
                background-color: ${props.theme.color.background.primary};
                border-color: ${props.theme.color.border.primary};
                color: ${props.theme.color.base};
    
                &::before {
                    display: block;
                }
            }
    
            &:where(:disabled) {
                cursor: default;
                opacity: 0.7;
            }
    
            &::before {
                content: '';
                position: absolute;
                display: none;
                width: 3px;
                height: 8px;
                border: solid ${props.theme.color.base};
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                position: absolute;
                left: 4px;
                top: 0px;
            }
        }
    
        & > ${Label} {
            ${props.theme.position.flex()};
            cursor: pointer;
            margin: 0 1rem 0 0;
        }
    `};
`
