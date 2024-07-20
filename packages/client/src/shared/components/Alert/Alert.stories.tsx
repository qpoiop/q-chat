import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Box } from '@/shared/components/Box'
import { Button } from '@/shared/components/Forms/Button'
import { isBoolean } from '@/shared/core'
import { Alert } from './Alert'

const meta = {
    component: Alert,
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof Alert>

const Template: StoryFn<typeof Alert> = ({ show, children, ...rest }) => {
    const [isShow, setIsShow] = useState<boolean>(show)

    useEffect(() => {
        if (isBoolean(show)) {
            setIsShow(show)
        }
    }, [show])

    return (
        <Box>
            <Button onClick={() => setIsShow(true)}>Open Alert</Button>
            <Alert show={isShow} {...rest} onClose={() => setIsShow(false)} onApply={() => setIsShow(false)}>
                Alert Body
            </Alert>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        show: false,
        enableOutsideClick: true,
        showCloseButton: true,
        title: 'Alert Title',
    },
}
