import { ThemePreset } from './theme.types'

const LightTheme: ThemePreset = {
    base: '#FFFFFF',
    reverse: '#222222',
    font: {
        default: '#222222',
        primary: '#2e79eb',
        secondary: '#FF66A6',
        warning: '#FFAE62',
        danger: '#ff4171',
    },
    background: {
        default: '#FFFFFF',
        primary: '#2E79EB',
        secondary: '#FF66A6',
        warning: '#FFAE62',
        danger: '#FF4545',
    },
    border: {
        default: '#444444',
        primary: '#2E79EB',
        secondary: '#FF66A6',
        warning: '#FFAE62',
        danger: '#FF4171',
    },
    shadow: {
        default: '#F8F8F8',
        strong: '#888888',
    },
}

export default Object.freeze(LightTheme)
