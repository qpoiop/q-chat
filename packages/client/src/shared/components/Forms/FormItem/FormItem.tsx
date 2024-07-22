import classNames from 'classnames'
import { forwardRef, useId, useMemo } from 'react'
import { useCreateContext } from '@/shared/hooks/useCreateContext'
import { Direction, Position } from '@/shared/core'
import { SFormItem, SFormStack } from './FormItem.styles'
import { IFormItemContextProps, IFormItemProps } from './FormItem.types'

const [FormItemProvider, useFormItemContext] = useCreateContext<IFormItemContextProps>({
    disabled: false,
    error: false,
    required: false,
})

/** FormItem Component */
export const FormItem = forwardRef<HTMLDivElement, IFormItemProps>(function FormItem(
    { id, labelPosition = Direction.Horizontal, error = false, required = false, disabled = false, className, style, children },
    forwardedRef,
) {
    const uniqueId = useId()
    const formItemContextProps = useMemo(() => ({ id: id ?? uniqueId, error, required, disabled }), [error, required, disabled])
    const labelAlign = useMemo(() => (labelPosition == Direction.Horizontal ? Position.Center : Position.Start), [labelPosition])

    return (
        <SFormItem ref={forwardedRef} style={style} className={classNames(className)}>
            <FormItemProvider value={formItemContextProps}>
                <SFormStack ref={forwardedRef} direction={labelPosition} justify={Position.Between} align={labelAlign}>
                    {children}
                </SFormStack>
            </FormItemProvider>
        </SFormItem>
    )
})

export const useFormItemProps = (props?: IFormItemContextProps) => {
    const contextProps = useFormItemContext()

    const mergedProps = useMemo(() => {
        return {
            ...contextProps,
            ...props,
        }
    }, [contextProps, props])

    return mergedProps as typeof mergedProps
}
