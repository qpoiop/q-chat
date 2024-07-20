import { Meta, StoryObj } from '@storybook/react'
import { Box, Stack, Text } from 'src'
import { Direction, Position } from '@/shared/core'

const meta = {
    component: Stack,
    argTypes: {
        direction: {
            control: 'radio',
            options: Object.values(Direction),
        },
        justify: {
            control: 'radio',
            options: Object.values(Position),
        },
        align: {
            control: 'radio',
            options: Object.values(Position),
        },
        spacing: {
            control: { type: 'range', min: 0, max: 100 },
        },
        padding: {
            control: { type: 'range', min: 0, max: 100 },
        },
    },
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
    render: args => (
        <Box style={{ width: 300, height: 300 }} border>
            <Stack {...args}>
                <Text>TEXT1</Text>
                <Text>TEXT2</Text>
                <Text>TEXT3</Text>
            </Stack>
        </Box>
    ),
    args: {
        direction: Direction.Horizontal,
        justify: Position.Start,
        align: Position.Start,
        spacing: 6,
        padding: 10,
    },
}
