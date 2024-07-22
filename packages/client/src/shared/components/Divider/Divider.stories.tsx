import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box, Divider, Stack, Text } from 'src'
import { Direction, Position } from '@/shared/core'

const meta = {
    component: Divider,
    argTypes: {
        direction: {
            control: 'radio',
            options: Object.values(Direction),
        },
        indentation: {
            control: { type: 'range', min: 0, max: 100 },
        },
        thickness: {
            control: { type: 'range', min: 0, max: 100 },
        },
    },
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof Divider>

const Template: StoryFn<typeof Divider> = props => (
    <Box style={{ width: 250, height: 250 }}>
        <Stack direction={props.direction} justify={Position.Center} align={Position.Center}>
            <Text>A</Text>
            <Divider {...props} />
            <Text>B</Text>
        </Stack>
    </Box>
)

export const Horizontal: Story = {
    render: Template,
    args: {
        direction: Direction.Horizontal,
        thickness: 1,
        indentation: 1,
    },
}

export const Vertical: Story = {
    render: Template,
    args: {
        direction: Direction.Vertical,
        thickness: 1,
        indentation: 1,
    },
}
