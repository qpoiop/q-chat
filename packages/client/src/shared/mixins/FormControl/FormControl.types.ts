import { Direction, IFormType, Primitive } from '@/shared/core'

export type IFormKey = string | number
export type IFormData = {
    [key: string | symbol]: any
}

export type IFormOption = {
    label?: string
    value: string
}
export type IFormError<R extends IFormData = IFormData> = {
    hasError: boolean
    key: keyof R
}

export interface IFormItem<R extends IFormData = IFormData> {
    key: keyof R
    type: IFormType
    label: string
    defaultValue?: IFormKey
    options?: IFormOption[]
    required?: boolean
    divide?: number
    validation?: RegExp | (() => boolean)
}

export interface IFormControlItemProps<R extends IFormData = any> {
    item: IFormItem<R>
}

interface IFormControlOwnProps<R extends IFormData = IFormData> {
    items: IFormItem<R>[]
    labelPosition?: Direction
    onChange?: (key: keyof R, value: Primitive) => void
}

export interface IFormControlProps<R extends IFormData = any> extends IFormControlOwnProps<R> {}

/** Form internal api */
export interface IFormApiModel<State extends IFormData = IFormData> {
    state?: State
    setState: (state: State | ((previousState: State) => State)) => boolean
    onChange?: (key: keyof State, value: Primitive) => void
}
