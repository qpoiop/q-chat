import { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '@/shared/components/Forms/CheckBox'
import { Stack } from '@/shared/components/Stack'

const meta: Meta<typeof CheckBox> = {
    component: CheckBox,
    argTypes: {
        onCheck: { action: 'onChange' },
    },
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
    render: ({ children, ...args }) => (
        <Stack>
            <CheckBox {...args}>{children}</CheckBox>
        </Stack>
    ),
    args: {
        checked: true,
        disabled: false,
        children: 'checkbox',
        id: 'id',
    },
}
