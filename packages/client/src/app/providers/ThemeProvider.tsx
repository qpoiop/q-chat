import { Slot } from '@/shared/components/Slot'
import { IChildrenProps } from '@/shared/core'
import { DarkTheme, LightTheme, ThemeName, ThemePreset } from '@/shared/theme'
import { createContext, forwardRef, useContext, useMemo, useState } from 'react'

const Tokenset: Record<ThemeName, ThemePreset> = {
    light: LightTheme,
    dark: DarkTheme,
}

interface IThemeContextProps {
    theme: ThemeName
    changeTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<IThemeContextProps>(null)
ThemeContext.displayName = 'ThemeContext'

export function useThemeContext() {
    return useContext(ThemeContext)
}

/** 테마에 따른 토큰 적용 */
const ThemeProvider = forwardRef<HTMLElement, IChildrenProps>(function ThemeProvider(props, forwardedRef) {
    const [theme, changeTheme] = useState<ThemeName>('light')

    return (
        <ThemeContext.Provider value={useMemo(() => ({ theme, changeTheme }), [theme])}>
            <Slot ref={forwardedRef} data-qui-theme={theme}>
                {props.children}
            </Slot>
        </ThemeContext.Provider>
    )
})

export default ThemeProvider
