import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box } from '@/shared/components/Box'
import { Variant } from '@/shared/core'
import { Header } from './Header'

const meta = {
    component: Header,
    argTypes: {
        variant: {
            control: 'radio',
            options: Object.values(Variant),
        },
    },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

const Template: StoryFn<typeof Header> = ({ children, ...args }) => {
    return (
        <Box style={{ width: 800, height: 500 }} border>
            <Header {...args}> Header </Header>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        variant: Variant.Default,
    },
}
