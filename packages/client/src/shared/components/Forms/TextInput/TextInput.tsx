import classNames from 'classnames'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react'
import { IFormItemProps, useFormItemProps } from '@/shared/components/Forms/FormItem'
import { InputType } from '@/shared/core'
import { SInput, SInputWrapper } from './TextInput.styles'
import { IInputProps, IInputRef } from './TextInput.types'

/**
 * Text Input
 */
export const TextInput = forwardRef<IInputRef, IInputProps>(function TextInput(
    { type = InputType.Text, focus = false, placeholder, value, style, onChange, className, leftContent, rightContent, ...rest },
    forwardedRef,
) {
    const inputRef = useRef<HTMLInputElement>()
    const focusTimeout = useRef<ReturnType<Window['setTimeout']>>()
    const blurTimeout = useRef<ReturnType<Window['setTimeout']>>()

    const onFocus = useCallback(() => {
        clearTimeout(focusTimeout.current)
        focusTimeout.current = window.setTimeout(() => {
            inputRef.current?.focus()
        }, 0)
    }, [window])

    const onBlur = useCallback(() => {
        clearTimeout(blurTimeout.current)
        blurTimeout.current = window.setTimeout(() => {
            inputRef.current?.blur()
        }, 0)
    }, [window])

    const { id, disabled, error, ...ownProps } = useFormItemProps(rest as IFormItemProps)

    useEffect(() => {
        if (focus) onFocus()
    }, [focus])

    /** 상위 컴포넌트에서 이벤트 사용할 수 있도록 핸들러 부여  */
    useImperativeHandle(forwardedRef, () => ({ onFocus, onBlur }))

    return (
        <SInputWrapper className={classNames(error && `error`, className)} onClick={onFocus}>
            {leftContent && leftContent}
            <SInput
                ref={inputRef}
                data-form-input
                id={id}
                disabled={disabled}
                tabIndex={-1}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                value={value}
                autoComplete="false"
                {...ownProps}
            />
            {rightContent && rightContent}
        </SInputWrapper>
    )
})
