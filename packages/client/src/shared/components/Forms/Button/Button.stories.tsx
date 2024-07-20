import { Meta, StoryObj } from '@storybook/react'
import { Size, Variant } from '@/shared/core'
import { Button } from './Button'

const meta = {
    component: Button,
    argTypes: {
        onClick: { action: 'onClick' },
        size: {
            control: 'radio',
            options: Object.values(Size),
        },
        variant: {
            control: 'radio',
            options: Object.values(Variant),
        },
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    render: ({ children, ...args }) => <Button {...args}> {children} </Button>,
    args: {
        children: 'Button',
        size: Size.M,
        variant: Variant.Default,
        disabled: false,
        fill: true,
        outline: true,
        loading: false,
    },
}
