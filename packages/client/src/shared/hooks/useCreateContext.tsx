import React from 'react'
import { IChildrenProps } from '../shared/types/components.types'

/**
 * @description React Context 생성
 * @returns Context.provider, useContext
 **/
export function useCreateContext<ContextValue extends unknown | null>(defaultValue?: ContextValue, providerName?: string) {
    const Context = React.createContext<ContextValue>(defaultValue)

    function Provider(props: ContextValue & IChildrenProps) {
        const { children, ...rest } = props
        const value = React.useMemo(() => rest, Object.values(rest)) as ContextValue
        return <Context.Provider value={value}>{children}</Context.Provider>
    }

    function useContext() {
        const contextValue = React.useContext(Context)
        return contextValue
    }

    Provider.displayName = `QuiContextProvider` + `${providerName}`
    return [Context.Provider, useContext] as const
}
