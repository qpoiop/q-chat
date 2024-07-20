import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box, Button, ButtonGroup } from 'src'
import { Direction, Position } from '@/shared/core'

const meta = {
    component: ButtonGroup,
    argTypes: {
        position: {
            control: 'radio',
            options: Object.values(Position),
        },
        direction: {
            control: 'radio',
            options: Object.values(Direction),
        },
    },
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof ButtonGroup>

const Template: StoryFn<typeof ButtonGroup> = ({ children, ...rest }) => {
    return (
        <Box style={{ width: '300px' }}>
            <ButtonGroup {...rest}>
                <Button> sample button 1 </Button>
                <Button> sample button 2 </Button>
            </ButtonGroup>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        direction: Direction.Horizontal,
        position: Position.Center,
    },
}
