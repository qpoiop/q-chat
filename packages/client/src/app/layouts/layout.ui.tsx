import { ParentProps, Suspense } from 'solid-js'
import style from './layout.module.scss'

export function GenericLayout(props: ParentProps) {
    return (
        <div class={style.layout}>
            <Suspense fallback={null}>{props.children}</Suspense>
        </div>
    )
}
