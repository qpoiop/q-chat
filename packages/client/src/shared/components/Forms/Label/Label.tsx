import classNames from 'classnames'
import { forwardRef } from 'react'
import { IFormItemProps, useFormItemProps } from '@/shared/components/Forms/FormItem'
import { Size } from '@/shared/core'
import { ILabelProps } from '.'
import { SLabel } from './Label.styles'

/**
 * Label Component
 */
export const Label = forwardRef<HTMLLabelElement, ILabelProps>(function Label({ children, style, size = Size.M, ...rest }, forwardedRef) {
    const { id, disabled, required, error, ...ownProps } = useFormItemProps(rest as IFormItemProps)

    return (
        <SLabel
            data-form-label
            ref={forwardedRef}
            style={style}
            htmlFor={id}
            size={size}
            className={classNames(required && `required`, error && `error`, disabled && 'disabled', `size-${size}`)}
            {...ownProps}
        >
            {children}
        </SLabel>
    )
})
