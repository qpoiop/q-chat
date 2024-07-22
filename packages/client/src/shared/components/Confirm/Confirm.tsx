import { Box, Button, ButtonGroup, Modal, ModalFooter, ModalHeader } from '@/shared/components'
import { DefaultValue, Size, Variant } from '@/shared/core'
import { forwardRef, memo, useCallback } from 'react'
import { IConfirmProps } from './Confirm.types'

/**
 * Confirm Component
 *
 * mixin `Modal` + `ButtonGroup`
 */
export const Confirm = memo(
    forwardRef<HTMLDivElement, IConfirmProps>(function Confirm(
        {
            className,
            show = false,
            enableOutsideClick = false,
            showCloseButton = true,
            containerRef,
            onApply,
            onClose,
            title = DefaultValue.BLANK,
            subTitle = DefaultValue.BLANK,
            applyButtonText = 'Ok',
            cancelButtonText = 'Cancel',
            style,
            children,
            ...rest
        },
        forwardedRef,
    ) {
        const rootContainer = containerRef || window.document.body

        const onApplyHandler = useCallback(() => {
            onApply?.()
        }, [onApply])

        const onCloseHandler = useCallback(() => {
            onClose?.()
        }, [onClose])

        return (
            <Modal
                ref={forwardedRef}
                show={show}
                style={{ ...style }}
                containerRef={rootContainer}
                onClose={onCloseHandler}
                enableOutsideClick={enableOutsideClick}
                showCloseButton={showCloseButton}
                size={Size.XS}
                {...rest}
            >
                <ModalHeader title={title} subTitle={subTitle} />
                <Box divide={1}> {children} </Box>

                <ModalFooter>
                    <ButtonGroup>
                        <Button size={Size.S} variant={Variant.Primary} onClick={() => onApplyHandler()}>
                            {applyButtonText}
                        </Button>
                        <Button size={Size.S} onClick={() => onCloseHandler()}>
                            {cancelButtonText}
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
            </Modal>
        )
    }),
)
