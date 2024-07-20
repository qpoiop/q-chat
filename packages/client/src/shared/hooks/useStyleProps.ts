import classNames from 'classnames'
import { IStyleProps, IVariantProps, isNil, isString } from '@/shared/core'
import styles from '../styles/variables/layout.module.scss'

function css<Value extends number | string>(value?: Value) {
    if (isNil(value)) {
        return undefined
    }
    if (isString(value)) {
        return value
    }
    if (value !== 0) {
        return `${value}px` as const
    }
    return value as 0
}

export function useLayoutProps<LayoutProps extends IStyleProps>({
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginHorizontal,
    marginVertical,
    marginLeft,
    marginTop,
    marginBottom,
    marginRight,
    width,
    height,
    inset,
    top,
    right,
    bottom,
    left,
    border,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    scroll,
    scrollX,
    scrollY,
}: LayoutProps) {
    return {
        style: {
            '--q-padding': css(padding),
            '--q-padding-horizontal': css(paddingHorizontal),
            '--q-padding-vertical': css(paddingVertical),
            '--q-padding-top': css(paddingTop),
            '--q-padding-right': css(paddingRight),
            '--q-padding-bottom': css(paddingBottom),
            '--q-padding-left': css(paddingLeft),
            '--q-margin': css(margin),
            '--q-margin-horizontal': css(marginHorizontal),
            '--q-margin-vertical': css(marginVertical),
            '--q-margin-top': css(marginTop),
            '--q-margin-right': css(marginRight),
            '--q-margin-bottom': css(marginBottom),
            '--q-margin-left': css(marginLeft),
            '--q-width': css(width),
            '--q-height': css(height),
            '--q-inset': css(inset),
            '--q-top': css(top),
            '--q-right': css(right),
            '--q-bottom': css(bottom),
            '--q-left': css(left),
            '--q-border-width': border ? '1px' : css(borderWidth),
            '--q-border-radius': css(borderRadius),
            '--q-border-top-width': css(borderTopWidth),
            '--q-border-right-width': css(borderRightWidth),
            '--q-border-bottom-width': css(borderBottomWidth),
            '--q-border-left-width': css(borderLeftWidth),
        } as React.CSSProperties,
        className: classNames(styles['q-layout'], scroll && styles.scroll, scrollX && styles['scroll-x'], scrollY && styles['scroll-y']),
    }
}

export function useVariantProps<VariantProps extends IVariantProps>({ variant }: VariantProps) {
    return {
        style: {
            '--q-border-color': variant,
        },
    }
}
