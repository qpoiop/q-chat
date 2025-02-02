import React from 'react'

export function setRef<T>(ref: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined, value: T | null): void {
    if (typeof ref === 'function') {
        ref(value)
    } else if (ref) {
        ref.current = value
    }
}

/** 두개 이상의 ref 참조를 병합 */
export function useMergeRefs<T>(...refs: Array<React.Ref<T> | undefined>): React.RefCallback<T> | null {
    return React.useMemo(() => {
        if (refs.every(ref => ref == null)) {
            return null
        }

        return instance => {
            refs.forEach(ref => {
                setRef(ref, instance)
            })
        }
    }, refs)
}
