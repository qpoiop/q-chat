import { Meta, StoryObj } from '@storybook/react'
import { Radio } from '.'

const meta = {
    component: Radio,
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
    args: {
        children: 'Radio',
        id: 'radio-sample-id',
        disabled: false,
        checked: true,
    },
}
