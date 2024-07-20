import { Meta, StoryObj } from '@storybook/react'
import { Label } from 'src'
import { Size } from '@/shared/core'

const meta = {
    component: Label,
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
    render: ({ children, ...args }) => <Label {...args}>{children}</Label>,
    args: {
        children: 'Label',
        disabled: false,
        size: Size.M,
    },
}
