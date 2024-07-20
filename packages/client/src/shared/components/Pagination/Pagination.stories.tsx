import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta = {
    component: Pagination,
    parameters: {
        controls: {
            exclude: ['containerRef', 'targetRef'],
        },
    },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

const Template: StoryFn<typeof Pagination> = ({ ...args }) => {
    return <Pagination onPageChange={(_, idx) => alert(idx)} {...args} />
}

export const Default: Story = {
    render: Template,
    args: {
        page: 1,
        offset: 10,
        disabled: false,
        float: false,
        pageSize: 5,
        totalCount: 101,
        border: false,
        style: {},
    },
}
