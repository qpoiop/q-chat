import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box } from '@/shared/components/Box'
import { Direction } from '@/shared/core'
import { LayerRoot, LayerSlot } from './Layer'

const meta = {
    component: LayerRoot,
    argTypes: {
        padding: {
            control: { type: 'range', min: 0, max: 100 },
        },
        spacing: {
            control: { type: 'range', min: 0, max: 100 },
        },
    },
} satisfies Meta<typeof LayerRoot>

export default meta

type Story = StoryObj<typeof LayerRoot>

const Template: StoryFn<typeof LayerRoot> = ({ children, ...args }) => {
    return (
        <Box style={{ width: '500px', height: '500px' }}>
            <LayerRoot {...args}>
                <LayerSlot border>default size</LayerSlot>
                <LayerSlot border divide={2}>
                    1/2 size
                </LayerSlot>
                <LayerSlot border divide={2}>
                    1/2 size
                </LayerSlot>
                <LayerSlot border>default size</LayerSlot>
            </LayerRoot>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        direction: Direction.Horizontal,
        padding: 10,
        spacing: 6,
    },
}
