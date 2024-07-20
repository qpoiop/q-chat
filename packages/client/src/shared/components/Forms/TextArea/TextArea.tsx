import classNames from 'classnames'
import { forwardRef } from 'react'
import { STextArea } from './TextArea.styles'
import { ITextAreaProps } from './TextArea.types'

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(function TextArea(
    { value, className, placeholder, resize = false, disabled = false, ...rest },
    forwardedRef,
) {
    return (
        <STextArea
            ref={forwardedRef}
            tabIndex={-1}
            disabled={disabled}
            className={classNames(resize && `resize`, className)}
            placeholder={placeholder}
            value={value}
            {...rest}
        />
    )
})
