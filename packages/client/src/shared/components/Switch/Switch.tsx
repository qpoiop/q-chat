import classNames from 'classnames'
import { forwardRef, useCallback, useEffect, useState } from 'react'
import { Size, Variant } from '@/shared/core'
import { SSwitch, SSwitchThumb } from './Switch.styles'
import { ISwitchProps } from './Switch.types'

/** Switch Component */
export const Switch = forwardRef<HTMLButtonElement, ISwitchProps>(function Switch(
    { className, checked = false, disabled = false, onChange, size = Size.M, variant = Variant.Primary, style },
    forwardedRef,
) {
    const [isChecked, setIsChecked] = useState<boolean>(checked)

    /** 수동 체크 값 변경 시 상태 반영 */
    useEffect(() => {
        if (isChecked !== checked) setIsChecked(checked)
    }, [checked])

    const onClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!disabled) {
            onChange?.(isChecked)
            setIsChecked(prev => !prev)
        }
    }, [])

    return (
        <SSwitch
            ref={forwardedRef}
            style={{ ...style }}
            size={size}
            disabled={disabled}
            variant={variant}
            onClick={onClickHandler}
            className={classNames(`Switch`, `variant-${variant}`, `size-${size}`)}
        >
            <SSwitchThumb className={classNames(isChecked && `checked`, className)} />
            {/* <StyledSwitchTrack defaultChecked={checked} /> */}
        </SSwitch>
    )
})
