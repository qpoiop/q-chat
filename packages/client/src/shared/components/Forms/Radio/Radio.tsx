import { Label } from '@/shared/components'
import { Size } from '@/shared/core'
import classNames from 'classnames'
import { forwardRef, useCallback, useId, useMemo } from 'react'
import { useFormGroupContext } from '../FormGroup'
import { IFormItemProps, useFormItemProps } from '../FormItem'
import { SRadio } from './Radio.styles'
import { IRadioProps } from './Radio.types'

/** Radio component */
export const Radio = forwardRef<HTMLInputElement, IRadioProps>(function Radio(
    { value, checked = false, onCheck, children, className, style, ...rest },
    forwardedRef,
) {
    const id = useId()

    const { disabled, error } = useFormItemProps(rest as IFormItemProps)
    const { onChange, value: groupValue } = useFormGroupContext()

    const isCheckedFromGroup = useMemo(() => !!groupValue && groupValue == value, [value, groupValue])

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onCheck?.(e)
        onChange?.(value)
    }, [])

    return (
        <SRadio ref={forwardedRef}>
            <input
                type="radio"
                id={id}
                tabIndex={-1}
                value={value}
                checked={isCheckedFromGroup || checked}
                onChange={onChangeHandler}
                disabled={disabled}
                style={style}
                className={classNames(error && `error`, className)}
            />
            <Label id={id} disabled={disabled} size={Size.S}>
                {children}
            </Label>
        </SRadio>
    )
})
