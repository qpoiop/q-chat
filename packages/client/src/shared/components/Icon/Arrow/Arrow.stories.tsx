import { Meta, StoryObj } from '@storybook/react'
import { Shift, Size, Variant } from '@/shared/core'
import { Arrow } from '.'

const meta = {
    component: Arrow,
    parameters: {
        controls: {
            exclude: ['source'],
        },
    },
    argTypes: {
        direction: {
            control: 'radio',
            options: Object.values(Shift),
        },
        size: {
            control: 'radio',
            options: Object.values(Size),
        },
        variant: {
            control: 'radio',
            options: Object.values(Variant),
        },
    },
} satisfies Meta<typeof Arrow>

export default meta

type Story = StoryObj<typeof Arrow>

export const Default: Story = {
    render: args => <Arrow {...args} />,
    args: {
        direction: Shift.Down,
        outline: false,
        fill: false,
        size: Size.M,
        variant: Variant.Default,
    },
}
