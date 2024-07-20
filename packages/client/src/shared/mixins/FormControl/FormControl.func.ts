import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Direction, Primitive, isFunction } from '@/shared/core'
import { IFormApiModel, IFormControlProps, IFormData } from './FormControl.types'

const DEFAULT_PROPS: IFormControlProps = {
    items: [],
    labelPosition: Direction.Horizontal,
}

export const initializeProps = <R extends IFormData = any>(props: IFormControlProps<R>) => {
    const rootProps = useMemo<IFormControlProps<R>>(
        () => ({
            ...DEFAULT_PROPS,
            ...props,
        }),
        [props],
    )

    return rootProps
}

export const registerApi = <R extends IFormData = any>(rootProps: IFormControlProps<R>) => {
    const formRef = useRef({
        state: null,
        setState: null,
    }) as React.MutableRefObject<IFormApiModel>
    const firstRender = useRef<boolean>(true)

    const [, reRender] = useState<IFormApiModel['state']>()
    const forceUpdate = useCallback(() => reRender(() => formRef.current.state), [formRef])

    const initState = useCallback(() => {
        formRef.current.setState(prev => ({
            ...prev,
            ...rootProps.items.reduce((acc, cur) => {
                const { key, defaultValue } = cur
                acc[key] = acc[key] ?? defaultValue
                return acc
            }, {} as IFormData),
        }))
    }, [rootProps])

    const setState = useCallback<IFormApiModel['setState']>(
        state => {
            let newState: IFormApiModel['state']
            if (isFunction(state)) newState = state(formRef.current.state)
            else newState = state

            if (formRef.current.state === newState) return false
            formRef.current.state = newState
        },
        [formRef],
    )

    const changeForm = useCallback(
        (key: keyof R, value: Primitive) => {
            rootProps.onChange?.(key, value)
            formRef.current.setState(prev => ({
                ...prev,
                [key]: value,
            }))
            forceUpdate()
        },
        [formRef],
    )

    // initailization
    if (firstRender.current) {
        formRef.current.setState = setState
        formRef.current.onChange = changeForm
        initState()
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        initState()
    }, [rootProps.items])

    return formRef
}
