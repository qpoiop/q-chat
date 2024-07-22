import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { TextArea } from '.'

const meta = {
    component: TextArea,
    argTypes: {
        onChange: { action: 'onChange' },
    },
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof TextArea>

const Template: StoryFn<typeof TextArea> = args => {
    const [value, setValue] = useState<string>()

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target?.value)
    }, [])

    return <TextArea onChange={handleChange} value={value} {...args} />
}

export const Default: Story = {
    render: Template,
    args: {
        disabled: false,
        resize: false,
        placeholder: 'placeholder',
    },
}
