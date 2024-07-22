import useStyled from '@/shared/hooks/useStyled'

export const SStack = useStyled()<{ $gap?: number; $padding: number }>`
    ${props =>
        `
        gap: ${props.$gap || 0}px;
        padding: ${props.$padding || 0}px;
    `};

    display: flex;
    width: 100%;
    height: 100%;

    &:where(.direction-horizontal) {
        flex-direction: row;
    }
    &:where(.direction-vertical) {
        flex-direction: column;
    }

`
