import useStyled from '@/shared/hooks/useStyled'
import { IVariantProps, Variant } from '@/shared/core'
import styled from 'styled-components'

export const SArrowWrapper = useStyled()<IVariantProps>`
    ${props => `
        // ${props.theme.position.flex()};
        position: relative;
        background-color: inherit;
        
        &:where(.size-xl) {
            width: 2.8rem;
            height: 2.8rem;
            padding: 0.7rem;
        }
        &:where(.size-l) {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0.65rem;
        }
        &:where(.size-m) {
            width: 2.2rem;
            height: 2.2rem;
            padding: 0.65rem;
        }
        &:where(.size-s) {
            width: 1.8rem;
            height: 1.8rem;
            padding: 0.5rem;
        }
        &:where(.size-xs) {
            width: 1.5rem;
            height: 1.5rem;
            padding: 0.4rem;
        }
        border: 1px solid transparent;
        &:where(.variant-${props.variant}) {
            color: ${props.theme.color.font[props.variant]};
            & > ${SArrow} {
                border: 1px solid currentColor;
            }

            &:where(.fill) {
                background-color: ${props.theme.color.background[props.variant]};
                & > ${SArrow} {
                    ${props.variant !== Variant.Default && `border: 1px solid ${props.theme.color.base};`}
                }
            }
            &:where(.outline) {
                border: 1px solid ${props.theme.color.border[props.variant]};
            }
        }


        
    `};
`
export const SArrow = styled.span`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    // transition: transform 0.2s linear;
    border-bottom: 0 !important;
    border-left: 0 !important;

    &:where(.direction-up) {
        top: 20%;
        transform: rotate(-45deg);
    }

    &:where(.direction-down) {
        bottom: 20%;
        transform: rotate(134deg);
    }

    &:where(.direction-left) {
        left: 20%;
        transform: rotate(225deg);
    }

    &:where(.direction-right) {
        right: 20%;
        transform: rotate(42deg);
    }
`
