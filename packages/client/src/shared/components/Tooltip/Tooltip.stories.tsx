import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box, Text, Tooltip } from 'src'
import { Size, Variant } from '@/shared/core'

const meta = {
    component: Tooltip,
    parameters: {
        controls: {
            exclude: ['triggerRef', 'children'],
        },
    },
    argTypes: {
        size: {
            control: 'radio',
            options: Object.values(Size),
        },
        variant: {
            control: 'radio',
            options: Object.values(Variant),
        },
    },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof Tooltip>

const Template: StoryFn<typeof Tooltip> = ({ children, ...rest }) => {
    return (
        <Box style={{ width: 200, height: 200 }}>
            <Tooltip {...rest}>
                <Text>Trigger text</Text>
            </Tooltip>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        delay: 0,
        variant: Variant.Default,
        defaultShow: false,
        title: 'tooltip title',
        content: 'this is tooltip content',
        size: Size.M,
    },
}
