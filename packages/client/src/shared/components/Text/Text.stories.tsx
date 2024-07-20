import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { HAlign, Size, Variant } from '@/shared/core'
import { ITextProps, Text } from '.'

const meta = {
    component: Text,
    argTypes: {
        align: {
            control: 'radio',
            options: Object.values(HAlign),
        },
        size: {
            control: 'radio',
            options: Object.values(Size),
        },
        variant: {
            control: 'radio',
            options: Object.values(Variant),
        },
    },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<ITextProps>

const Template: StoryFn<typeof Text> = props => (
    <div style={{ width: 200 }}>
        <Text {...props}>Text sample</Text>
    </div>
)

export const Default: Story = {
    render: Template,
    args: {
        align: HAlign.Left,
        size: Size.M,
        variant: Variant.Default,
        bold: false,
        italic: false,
        truncated: 1,
    },
}
