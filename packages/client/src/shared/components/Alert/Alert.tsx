import { forwardRef, memo, useCallback } from 'react'
import { Box } from '@/shared/components/Box'
import { Button } from '@/shared/components/Forms/Button'
import { ButtonGroup } from '@/shared/components/Forms/ButtonGroup'
import { Modal, ModalFooter, ModalHeader } from '@/shared/components/Modal'
import { DefaultValue, Size } from '@/shared/core'
import { IAlertProps } from './Alert.types'

/**
 * Alert Component
 *
 * mixin `Modal`  + `Button`
 */
export const Alert = memo(
    forwardRef<HTMLDivElement, IAlertProps>(function Alert(
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
            ApplyButtonText = 'Ok',
            style,
            children,
            ...rest
        },
        forwardedRef,
    ) {
        const rootContainer = containerRef || window.document.body
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
                        <Button size={Size.S} onClick={() => onApply?.()}>
                            {ApplyButtonText}
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
            </Modal>
        )
    }),
)
