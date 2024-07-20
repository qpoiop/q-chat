export type ThemeName = 'light' | 'dark'

export type ThemePreset = {
    base: string
    reverse: string
    font: {
        default: string
        primary: string
        secondary: string
        warning: string
        danger: string
    }
    background: {
        default: string
        primary: string
        secondary: string
        warning: string
        danger: string
    }
    border: {
        default: string
        primary: string
        secondary: string
        warning: string
        danger: string
    }
    shadow: {
        default: string
        strong: string
    }
}
