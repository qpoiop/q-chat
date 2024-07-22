import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useCallback } from 'react'
import { Box, FormControl } from 'src'
import { Direction, IFormType } from '@/shared/core'

const meta = {
    component: FormControl,
} satisfies Meta<typeof FormControl>

export default meta

type Story = StoryObj<typeof FormControl>

const Template: StoryFn<typeof FormControl> = ({ ...args }) => {
    const onSubmit = useCallback((page: number) => {}, [])
    const onBlur = useCallback((offset: number) => {}, [])

    return (
        <Box style={{ width: 700 }} border flex>
            <FormControl {...args} />
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        items: [
            { key: 'text1', defaultValue: '', type: IFormType.Text, label: '아이디', divide: 2 },
            { key: 'text2', defaultValue: '', type: IFormType.Text, label: '이름', divide: 2 },
            {
                key: 'select',
                defaultValue: '',
                type: IFormType.Select,
                label: '언어',
                options: [
                    { label: '한국어', value: 'kor' },
                    { label: '영어', value: 'eng' },
                ],
            },
            {
                key: 'check',
                defaultValue: '',
                type: IFormType.Checkbox,
                label: '약관',
                options: [
                    { label: '이용약관', value: 'agreement' },
                    { label: '개인정보', value: 'privacy' },
                ],
            },
            {
                key: 'radio',
                defaultValue: 'man',
                type: IFormType.Radio,
                label: '성별',
                options: [
                    { label: '남', value: 'man' },
                    { label: '여', value: 'woman' },
                ],
            },
        ],
        labelPosition: Direction.Horizontal,
    },
}
