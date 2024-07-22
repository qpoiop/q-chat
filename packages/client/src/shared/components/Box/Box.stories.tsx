import { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'

const meta = {
    component: Box,
    argTypes: {
        radius: {
            control: { type: 'range', min: 0, max: 100 },
        },
        divide: {
            control: { type: 'range', min: 0, max: 4 },
        },
    },
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof Box>

export const Default: Story = {
    render: ({ children, flex, ...args }) => (
        <Box width={500} height={500}>
            <Box flex={flex} {...args}>
                BOX ITEM1
            </Box>
            <Box flex={flex} {...args}>
                BOX ITEM2
            </Box>
            <Box flex={flex} {...args}>
                BOX ITEM3
            </Box>
            <Box flex={flex} {...args}>
                BOX ITEM4
            </Box>
        </Box>
    ),
    args: {
        divide: 1,
        radius: 4,
        flex: true,
        scroll: false,
        shadow: false,
        border: true,
        center: false,
    },
}
