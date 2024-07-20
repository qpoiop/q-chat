import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'
import { Box, Button, Overlay } from 'src'
import { isBoolean } from '@/shared/core'

const meta = {
    component: Overlay,
    parameters: {
        controls: {
            exclude: ['containerRef', 'targetRef'],
        },
    },
    argTypes: {
        margin: {
            control: { type: 'range', min: 0, max: 100 },
        },
    },
} satisfies Meta<typeof Overlay>

export default meta

type Story = StoryObj<typeof Overlay>

const Template: StoryFn<typeof Overlay> = ({ show, children, ...rest }) => {
    const [isShow, setIsShow] = useState(false)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const targetRef = useRef<HTMLButtonElement | null>(null)

    useEffect(
        function syncShow() {
            if (isBoolean(show)) {
                setIsShow(show)
            }
        },
        [show],
    )

    return (
        <Box ref={containerRef}>
            <Button ref={targetRef} onClick={() => setIsShow(!isShow)}>
                Overlay rendered in Container
            </Button>

            <Overlay show={isShow} containerRef={containerRef.current} targetRef={targetRef.current} onHide={() => setIsShow(false)} {...rest}>
                {children}
            </Overlay>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        style: {
            width: 200,
            height: 100,
        },
        margin: 5,
        show: false,
        border: false,
        enableOutsideClick: true,
        enableEscapeKey: true,
    },
}
