import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Box, Radio } from 'src'
import { Direction, Position } from '@/shared/core'
import { FormGroup } from '.'

const meta = {
    component: FormGroup,
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
} satisfies Meta<typeof FormGroup>

export default meta

type Story = StoryObj<typeof FormGroup>

const Template: StoryFn<typeof FormGroup> = ({ value, children, ...rest }) => {
    const [checkedValue, setValue] = useState<string>(() => value)

    useEffect(() => {
        setValue(value)
    }, [value])

    return (
        <Box style={{ width: '500px' }}>
            <FormGroup value={checkedValue} onChange={value => setValue(value)} {...rest}>
                <Radio id="1" value="1">
                    Radio value is "1"
                </Radio>
                <Radio id="2" value="2">
                    Radio value is "2"
                </Radio>
                <Radio id="3" value="3">
                    Radio value is "3"
                </Radio>
            </FormGroup>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        value: '1',
        direction: Direction.Horizontal,
        position: Position.Center,
    },
}
