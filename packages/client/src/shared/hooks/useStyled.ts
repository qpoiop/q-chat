import styled from 'styled-components'

/**
 * styled-component `$`prefix 사용하지 않고 Component props와 동일한 type을 사용하기 위해 제공
 **/
export default function useStyled(tag: React.ElementType = 'div', options = {}) {
    return styled(tag).withConfig({
        displayName: `qui-element-${tag}`,
        shouldForwardProp: (props: PropertyKey) => !!props,
        ...options,
    })
}
