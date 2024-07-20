import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Box, Button } from 'src'
import { isBoolean } from '@/shared/core'
import { Confirm } from '.'

const meta = {
    component: Confirm,
} satisfies Meta<typeof Confirm>

export default meta

type Story = StoryObj<typeof Confirm>

const Template: StoryFn<typeof Confirm> = ({ show, children, ...rest }) => {
    const [isShow, setIsShow] = useState<boolean>(show)

    useEffect(() => {
        if (isBoolean(show)) {
            setIsShow(show)
        }
    }, [show])

    return (
        <Box>
            <Button onClick={() => setIsShow(true)}>Open Confirm</Button>
            <Confirm
                show={isShow}
                {...rest}
                onClose={() => setIsShow(false)}
                onApply={() => {
                    alert('click button')
                }}
            >
                Confirm Body
            </Confirm>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        show: false,
        enableOutsideClick: true,
        showCloseButton: true,
        title: 'Confirm Title',
    },
}
