import { forwardRef, memo, useCallback } from 'react'
import { Box } from '@/shared/components/Box'
import { useCreateContext } from '@/shared/hooks/useCreateContext'
import { range } from '@/shared/core'
import { initializeProps, registerApi } from './FormControl.func'
import { IFormApiModel, IFormControlProps, IFormData } from './FormControl.types'
import { FormControlBody } from './FormControlBody'

const [FormRootProvider, useFormRootContext] = useCreateContext<IFormControlProps>()
const [FormApiProvider, useFormApiContext] = useCreateContext<IFormApiModel>()

export { useFormApiContext, useFormRootContext }

const FormControlRoot = forwardRef(function FormControlRoot<R extends IFormData = any>(
    props: IFormControlProps,
    forwardedRef: React.Ref<HTMLDivElement>,
): React.JSX.Element {
    const rootProps = initializeProps<R>(props)
    const tableRef = registerApi<R>(rootProps)

    return (
        <FormRootProvider value={props}>
            <FormApiProvider value={tableRef.current}>
                <FormControlSlot ref={forwardedRef} />
            </FormApiProvider>
        </FormRootProvider>
    )
})

export const FormControlSlot = forwardRef<HTMLDivElement>(function FormControlSlot(_, forwardedRef) {
    const rootProps = useFormRootContext()
    const formRef = useFormApiContext()

    const formRenderer = useCallback(() => {
        const formItems: React.ReactNode[] = []
        const formIndexs = range(0, rootProps.items.length)

        formIndexs.forEach(formIndex => {
            const item = rootProps.items[formIndex]
            formItems.push(<FormControlBody key={item.key.toString()} item={item} />)
        })

        return formItems
    }, [rootProps.items, formRef.state])

    const formItems = formRenderer()

    return (
        <Box ref={forwardedRef} divide={1} padding={10} flex>
            {formItems}
        </Box>
    )
})

/** FormControl mixin */
export const FormControl = memo(FormControlRoot)
