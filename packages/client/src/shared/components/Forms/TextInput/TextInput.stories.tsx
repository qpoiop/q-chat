import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { InputType } from '@/shared/core'
import { TextInput } from './TextInput'

const meta = {
    component: TextInput,
    argTypes: {
        onChange: { action: 'onChange' },
        type: {
            control: 'radio',
            options: Object.values(InputType),
        },
    },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof TextInput>

const Template: StoryFn<typeof TextInput> = args => {
    const [value, setValue] = useState<string>()

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target?.value)
    }, [])

    return <TextInput onChange={handleChange} value={value} {...args} />
}

export const Default: Story = {
    render: Template,
    args: {
        disabled: false,
        type: InputType.Text,
        placeholder: 'placeholder',
        leftContent: <div>Left</div>,
        rightContent: <div>Right</div>,
    },
}
