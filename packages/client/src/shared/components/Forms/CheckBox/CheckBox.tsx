import classNames from 'classnames'
import { forwardRef, useCallback, useId, useMemo, useRef } from 'react'
import { Label } from 'src'
import { IFormItemProps, useFormItemProps } from '@/shared/components/Forms/FormItem'
import { Size } from '@/shared/core'
import { useFormGroupContext } from '../FormGroup'
import { SCheckBox } from './CheckBox.styles'
import { ICheckBoxProps } from './CheckBox.types'

/**
 * CheckBox Component
 */
export const CheckBox = forwardRef<HTMLDivElement, ICheckBoxProps>(function CheckBox(
    { value, name, checked = false, onCheck, style, className, children, ...rest },
    forwardedRef,
) {
    const inputRef = useRef<HTMLInputElement>(null)
    const id = useId()

    const { disabled, error } = useFormItemProps(rest as IFormItemProps)
    const { onChange, value: groupValue } = useFormGroupContext()

    const isCheckedFromGroup = useMemo(() => !!groupValue && groupValue == value, [value, groupValue])

    const onChangeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!disabled) {
                onCheck?.(e)
                onChange?.(value)
            }
        },
        [onCheck, value],
    )

    return (
        <SCheckBox ref={forwardedRef} style={style}>
            <input
                ref={inputRef}
                type="checkbox"
                id={id}
                onChange={onChangeHandler}
                tabIndex={-1}
                name={name}
                value={value}
                checked={isCheckedFromGroup || checked}
                className={classNames(checked && 'checked', error && `error`, className)}
                disabled={disabled}
            />
            <Label id={id} disabled={disabled} size={Size.S}>
                {children}
            </Label>
        </SCheckBox>
    )
})
