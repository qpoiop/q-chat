import classNames from 'classnames'
import { forwardRef } from 'react'
import { Box } from '@/shared/components/Box'
import { Stack } from '@/shared/components/Stack'
import { Direction } from '@/shared/core'
import { SLayerSlot } from './Layer.styles'
import { ILayerProps, ILayerSlotProps } from './Layer.types'

export const LayerRoot = forwardRef<HTMLDivElement, ILayerProps>(function LayerRoot(
    { direction = Direction.Horizontal, className, spacing = 0, padding = 10, children },
    forwardedRef,
) {
    return (
        <Box flex>
            <Stack ref={forwardedRef} direction={direction} className={classNames(className)} padding={padding} spacing={spacing}>
                {children}
            </Stack>
        </Box>
    )
})

export const LayerSlot = forwardRef<HTMLDivElement, ILayerSlotProps>(function LayerSlot(
    { divide = 1, raduis = 0, className, padding = 0, border = false, shadow = false, children },
    forwardedRef,
) {
    return (
        <SLayerSlot
            flex
            ref={forwardedRef}
            shadow={shadow}
            borderRadius={raduis}
            border={border}
            divide={divide}
            className={classNames(className)}
            padding={padding}
        >
            {children}
        </SLayerSlot>
    )
})
