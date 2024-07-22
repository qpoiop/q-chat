import { ThemePreset } from 'src/theme'

export const color: ThemePreset = Object.freeze({
    base: 'var(--q-color-base)',
    reverse: 'var(--q-color-reverse)',
    font: {
        default: 'var(--q-color-font-default)',
        primary: 'var(--q-color-font-primary)',
        secondary: 'var(--q-color-font-secondary)',
        warning: 'var(--q-color-font-warning)',
        danger: 'var(--q-color-font-danger)',
    },
    background: {
        default: 'var(--q-color-background-default)',
        primary: 'var(--q-color-background-primary)',
        secondary: 'var(--q-color-background-secondary)',
        warning: 'var(--q-color-background-warning)',
        danger: 'var(--q-color-background-danger)',
    },
    border: {
        default: 'var(--q-color-border-default)',
        primary: 'var(--q-color-border-primary)',
        secondary: 'var(--q-color-border-secondary)',
        warning: 'var(--q-color-border-warning)',
        danger: 'var(--q-color-border-danger)',
    },
    shadow: {
        default: 'var(--q-color-shadow-default)',
        strong: 'var(--q-color-shadow-strong)',
    },
})
