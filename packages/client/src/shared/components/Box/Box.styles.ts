import styled from 'styled-components'

export const SBox = styled.div<{ divide?: number }>`
    ${props => `
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        ${props.divide && `flex: 1 1 ${Math.round(100 / props.divide)}%`};
        background-color: transparent;
        border-color: ${props.theme.color.border.default};
        
        &:where(.shadow) {
            box-shadow: 0 0 2px 0 ${props.theme.color.shadow.default}, 0 4px 12px 0 ${props.theme.color.shadow.default};
        }
        
        &:where(.center) {
            place-items: center;
            place-content: center;
        }
        
        &:where(.flex) {
            flex: 1;
        }
            
    `}
`
