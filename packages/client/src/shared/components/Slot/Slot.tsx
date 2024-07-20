import React, { cloneElement, forwardRef, isValidElement } from 'react'
import { setRef } from '@/shared/hooks/useMergeRefs'
import { ISlotProps } from './Slot.types'

const Slottable = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>
}

function isSlottable(child: React.ReactNode): child is React.ReactElement {
    return React.isValidElement(child) && child.type === Slottable
}

/** @description 빈 슬롯 생성 및 하위 요소 복사하여 props 전달  */
export const Slot = forwardRef<HTMLElement, ISlotProps>(({ children, ...props }, forwardedRef) => {
    const childrenArray = React.Children.toArray(children)
    const slottable = childrenArray.find(isSlottable)

    if (slottable) {
        const newElement = slottable.props.children as React.ReactNode

        const newChildren = childrenArray.map(child => {
            if (child === slottable) {
                if (React.Children.count(newElement) > 1) return React.Children.only(null)
                return React.isValidElement(newElement) ? (newElement.props.children as React.ReactNode) : null
            } else {
                return child
            }
        })

        return (
            <SlotClone {...props} ref={forwardedRef}>
                {React.isValidElement(newElement) ? React.cloneElement(newElement, undefined, newChildren) : null}
            </SlotClone>
        )
    }

    return (
        <SlotClone {...props} ref={forwardedRef}>
            {children}
        </SlotClone>
    )
})

const SlotClone = forwardRef<any, ISlotProps>(({ children, ...rest }, forwardedRef) => {
    if (isValidElement(children)) {
        return cloneElement(children as React.ReactElement, {
            ...rest,
            ref: forwardedRef ? setRef(forwardedRef, (children as any).ref) : children.props.ref || (children as any).ref,
        })
    }

    return React.Children.count(children) > 1 ? React.Children.only(null) : null
})

SlotClone.displayName = 'SlotClone'
