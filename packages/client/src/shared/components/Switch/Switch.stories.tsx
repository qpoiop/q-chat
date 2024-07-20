import { Meta, StoryObj } from '@storybook/react'
import { Size, Variant } from '@/shared/core'
import { Switch } from '.'

const meta = {
    component: Switch,
    argTypes: {
        onChange: { action: 'onClick' },
        size: {
            control: 'radio',
            options: Object.values(Size),
        },
        variant: {
            control: 'radio',
            options: Object.values(Variant),
        },
    },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
    render: args => <Switch {...args} />,
    args: {
        checked: false,
        disabled: false,
        size: Size.M,
        variant: Variant.Primary,
    },
}
