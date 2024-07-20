import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { Box } from 'src'
import { SelectControl } from './SelectControl'
import { ISelectControlItem } from './SelectControl.types'

const meta = {
    component: SelectControl,
} satisfies Meta<typeof SelectControl>

export default meta

type Story = StoryObj<typeof SelectControl>

const Template: StoryFn<typeof SelectControl> = ({ value, items, ...args }) => {
    const [selectedItem, setSelectedItem] = useState<string>(value)
    const onSelectHandler = useCallback(
        (item: ISelectControlItem) => {
            setSelectedItem(item.value)
        },
        [items],
    )

    return (
        <Box style={{ width: 300, height: 200 }}>
            <SelectControl items={items} value={selectedItem} onSelect={onSelectHandler} {...args} />
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        placeholder: 'Choose one',
        disabled: false,
        selectWithClose: true,
        value: '',
        items: [
            { label: `ITEM 1`, value: 'item1' },
            { label: `ITEM 2`, value: 'item2' },
            { label: `ITEM 3`, value: 'item3' },
            { label: `ITEM 4`, value: 'item4' },
            { label: `Loing label item 5 `, value: 'item5' },
            { label: `ITEM 6`, value: 'item6' },
            { label: `ITEM 7`, value: 'item7' },
            { label: `ITEM 8`, value: 'item8' },
            { label: `ITEM 9`, value: 'item9' },
        ],
    },
}
