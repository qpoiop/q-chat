import classNames from 'classnames'
import { forwardRef, useMemo } from 'react'
import { Stack } from 'src'
import { useCreateContext } from '@/shared/hooks/useCreateContext'
import { Direction, Position } from '@/shared/core'
import { IFormGroupProps } from './FormGroup.types'

const [FormGroupProvider, useFormGroupContext] = useCreateContext<IFormGroupProps>({})
export { useFormGroupContext }

/**
 * FormGroup Component
 */
export const FormGroup = forwardRef<HTMLDivElement, IFormGroupProps>(function FormGroup(
    { className, value, direction = Direction.Horizontal, position = Position.Center, style = {}, onChange, children, ...rest },
    fowardedRef,
) {
    const FormGroupContextProps = useMemo(() => ({ value, onChange }), [value, onChange])

    return (
        <FormGroupProvider value={FormGroupContextProps}>
            <Stack
                ref={fowardedRef}
                direction={direction}
                align={position}
                justify={Position.Start}
                style={{ height: '35px', ...style }}
                spacing={10}
                className={classNames(className)}
                {...rest}
            >
                {children}
            </Stack>
        </FormGroupProvider>
    )
})
