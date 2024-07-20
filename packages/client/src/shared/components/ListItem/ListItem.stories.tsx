import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box, Direction, Size, Stack } from 'src'
import { ListItem } from './ListItem'

const meta = {
    component: ListItem,
    argTypes: {
        size: {
            control: 'radio',
            options: Object.values(Size),
        },
        padding: {
            control: { type: 'range', min: 0, max: 100 },
        },
    },
} satisfies Meta<typeof ListItem>

export default meta

type Story = StoryObj<typeof ListItem>

const Template: StoryFn<typeof ListItem> = args => {
    return (
        <Stack direction={Direction.Vertical}>
            <ListItem {...args} onClick={() => alert('click1')} disabled>
                LIST ITEM 1
            </ListItem>
            <ListItem {...args} onClick={() => alert('click2')} active>
                LIST ITEM 2
            </ListItem>
            <ListItem {...args} onClick={() => alert('click3')}>
                LIST ITEM 3
            </ListItem>
            <ListItem {...args} onClick={() => alert('click4')}>
                LIST ITEM 4
            </ListItem>
            <ListItem {...args} onClick={() => alert('click5')}>
                LIST ITEM 5
            </ListItem>
            <ListItem {...args} onClick={() => alert('click6')}>
                LIST ITEM 6
            </ListItem>
        </Stack>
    )
}

export const Default: Story = {
    render: args => (
        <Box border>
            <ListItem onClick={() => alert('click')} {...args}>
                LIST ITEM
            </ListItem>
        </Box>
    ),
    args: {
        active: false,
        disabled: false,
        size: Size.M,
        padding: 10,
    },
}

export const WithList: Story = {
    render: Template,
    args: {
        padding: 6,
    },
}
