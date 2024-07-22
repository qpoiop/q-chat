import { ThemePreset } from './theme.types'

const DarkTheme: ThemePreset = {
    base: '#444444',
    reverse: '#F8F8F8',
    font: {
        default: '#f6f7f8',
        primary: '#FFAE62',
        secondary: '#FF66A6',
        warning: '#5d87ff',
        danger: '#ff4171',
    },
    background: {
        default: '#444444',
        primary: '#FFF4F2',
        secondary: '#FF66A6',
        warning: '#5d87ff',
        danger: '#ff4545',
    },
    border: {
        default: '#F8F8F8',
        primary: '#FFAE62',
        secondary: '#FF66A6',
        warning: '#5d87ff',
        danger: '#ff4171',
    },
    shadow: {
        default: '#dddddd',
        strong: '#f8f8f8',
    },
}

export default Object.freeze(DarkTheme)
