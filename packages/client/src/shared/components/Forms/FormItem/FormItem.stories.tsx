import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box, CheckBox, FormGroup, Label, Radio, Stack, TextInput } from 'src'
import { Direction } from '@/shared/core'
import { FormItem } from './FormItem'

const meta = {
    component: FormItem,
    parameters: {
        controls: {
            exclude: ['children'],
        },
    },
    argTypes: {
        labelPosition: {
            control: 'radio',
            options: Object.values(Direction),
        },
    },
} satisfies Meta<typeof FormItem>

export default meta

type Story = StoryObj<typeof FormItem>

const Template: StoryFn<typeof FormItem> = args => {
    return (
        <Box border style={{ width: 350 }}>
            <Stack direction={Direction.Vertical}>
                <FormItem {...args}>
                    <Label>Label</Label>
                    <TextInput />
                </FormItem>
                <FormItem {...args}>
                    <Label>Label</Label>
                    <FormGroup onChange={value => alert(value)}>
                        <CheckBox value="check1">Checkbox 1</CheckBox>
                        <CheckBox value="check2">Checkbox 2</CheckBox>
                        <CheckBox value="check3">Checkbox 3</CheckBox>
                    </FormGroup>
                </FormItem>
                <FormItem {...args}>
                    <Label>Label</Label>
                    <FormGroup onChange={value => alert(value)}>
                        <Radio value="radio1">Radio 1</Radio>
                        <Radio value="radio2">Radio 2</Radio>
                        <Radio value="radio3">Radio 3</Radio>
                    </FormGroup>
                </FormItem>
            </Stack>
        </Box>
    )
}

export const Default: Story = {
    render: args => (
        <FormItem {...args}>
            <Label>Form label1</Label>
            <TextInput />
        </FormItem>
    ),
    args: {
        disabled: false,
        error: false,
        required: false,
        labelPosition: Direction.Vertical,
    },
}

export const withMultiForm: Story = {
    render: Template,
    args: {
        disabled: false,
        error: false,
        required: false,
        labelPosition: Direction.Vertical,
    },
}
