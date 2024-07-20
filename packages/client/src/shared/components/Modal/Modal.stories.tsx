import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup } from 'src'
import { Size, Variant, isBoolean } from '@/shared/core'
import { Modal, ModalFooter, ModalHeader } from './Modal'
import { IModalHeaderProps, IModalProps } from './Modal.types'

const meta = {
    component: Modal,
    argTypes: {
        size: {
            control: 'radio',
            options: Object.values(Size),
        },
    },
} satisfies Meta<IModalProps & IModalHeaderProps>

export default meta

type Story = StoryObj<IModalProps & IModalHeaderProps>

const Template: StoryFn<IModalProps & IModalHeaderProps> = ({ show, children, title, subTitle, ...rest }) => {
    const [isShow, setIsShow] = useState<boolean>(show)

    useEffect(() => {
        if (isBoolean(show)) {
            setIsShow(show)
        }
    }, [show])

    return (
        <Box>
            <Button onClick={() => setIsShow(true)}>Open Modal</Button>
            <Modal show={isShow} onClose={() => setIsShow(false)} {...rest}>
                <ModalHeader title={title} subTitle={subTitle} />
                <Box style={{ width: '100%', height: '100%' }}>Modal Body</Box>
                <ModalFooter>
                    <ButtonGroup>
                        <Button size={Size.S} variant={Variant.Primary} onClick={() => alert('ok')}>
                            OK
                        </Button>
                        <Button size={Size.S} variant={Variant.Default} onClick={() => setIsShow(false)}>
                            CANCEL
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
            </Modal>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        show: false,
        showCloseButton: true,
        enableOutsideClick: true,
        size: Size.M,
        title: 'Modal Title',
        subTitle: 'Modal Subtitle',
    },
}
