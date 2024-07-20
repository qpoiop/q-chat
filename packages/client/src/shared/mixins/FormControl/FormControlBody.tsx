import { forwardRef, useCallback } from 'react'

import { Box } from '@/shared/components/Box'
import { CheckBox } from '@/shared/components/Forms/CheckBox'
import { FormGroup } from '@/shared/components/Forms/FormGroup'
import { FormItem } from '@/shared/components/Forms/FormItem'
import { Label } from '@/shared/components/Forms/Label'
import { Radio } from '@/shared/components/Forms/Radio'
import { TextInput } from '@/shared/components/Forms/TextInput'
import { IFormType, Primitive } from '@/shared/core'
import { SelectControl } from '../SelectControl'
import { useFormApiContext, useFormRootContext } from './FormControl'
import { IFormControlItemProps, IFormData } from './FormControl.types'

export const FormControlBody = forwardRef(function FormControlBody<R extends IFormData = IFormData>(
    { item }: IFormControlItemProps<R>,
    forwardedRef: React.Ref<HTMLDivElement>,
): React.JSX.Element {
    const rootProps = useFormRootContext()
    const formRef = useFormApiContext()
    const formKey = item.key.toString()

    const onChangeHandler = useCallback(
        (value: Primitive) => {
            console.log('change', value)
            formRef.onChange(formKey, value)
        },
        [formRef.state],
    )
    const formRenderer = useCallback((): React.ReactNode => {
        const formValue = formRef.state[formKey]
        switch (item.type) {
            case IFormType.Text:
                return <TextInput value={formValue} onChange={e => onChangeHandler(e.target.value)} />

            case IFormType.Select:
                return (
                    <SelectControl
                        placeholder="선택하세요"
                        items={item.options}
                        value={formValue}
                        onSelect={option => onChangeHandler(option.value)}
                    />
                )
            default:
                return (
                    <FormGroup onChange={onChangeHandler} value={formValue}>
                        {item.options?.map(option =>
                            item.type == IFormType.Checkbox ? (
                                <CheckBox key={option.value} value={option.value}>
                                    {option?.label ?? option.value}
                                </CheckBox>
                            ) : item.type == IFormType.Radio ? (
                                <Radio key={option.value} value={option.value}>
                                    {option?.label ?? option.value}
                                </Radio>
                            ) : null,
                        )}
                    </FormGroup>
                )
        }
    }, [formRef.state])

    const formItem = formRenderer()

    return (
        <Box ref={forwardedRef} divide={item.divide ?? 1} padding={5} flex>
            <FormItem id={formKey} labelPosition={rootProps.labelPosition} required={item.required}>
                <Label> {item.label} </Label>
                {formItem}
            </FormItem>
        </Box>
    )
})
