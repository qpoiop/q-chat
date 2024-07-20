import { CSSProperties, ElementType, SVGProps } from 'react'
import { Size, Variant } from '../enums/components.enums'

export interface ISizeProps<ComponentSize = Size> {
    /**
     * the size of an element
     * @default Size.M
     */
    size?: ComponentSize
}

export interface IVariantProps<ComponentVariant = Variant> {
    /**
     * the variant of an element
     * @default Variant.Default
     */
    variant?: ComponentVariant
}

export interface IChildrenProps<Children = React.ReactNode> {
    children?: Children
}

export interface IComponentProps {
    /**
     * Custom CSS class name for the component.
     *
     * **🚨 Caution:** Overuse can break the consistency of the overall design. Use only when absolutely necessary.
     */
    className?: string
}

/**
 * Custom inline CSS for the component.
 *
 * **🚨 Caution:** Overuse can break the consistency of the overall design. Use only when absolutely necessary.
 */
export interface IStyleProps {
    padding?: CSSProperties['padding']
    paddingHorizontal?: CSSProperties['padding']
    paddingVertical?: CSSProperties['padding']
    paddingTop?: CSSProperties['paddingTop']
    paddingBottom?: CSSProperties['paddingBottom']
    paddingLeft?: CSSProperties['paddingLeft']
    paddingRight?: CSSProperties['paddingRight']
    margin?: CSSProperties['margin']
    marginHorizontal?: CSSProperties['margin']
    marginVertical?: CSSProperties['margin']
    marginTop?: CSSProperties['marginTop']
    marginBottom?: CSSProperties['marginBottom']
    marginLeft?: CSSProperties['marginLeft']
    marginRight?: CSSProperties['marginRight']
    width?: CSSProperties['width']
    height?: CSSProperties['height']
    top?: CSSProperties['top']
    bottom?: CSSProperties['bottom']
    left?: CSSProperties['left']
    right?: CSSProperties['right']
    inset?: CSSProperties['inset']
    /**
     * the border radius of an element.
     * @default 0
     */
    borderRadius?: number
    /**
     * If true, the box will be rendered with `border`
     * @default false
     */
    border?: boolean
    borderWidth?: React.CSSProperties['borderWidth']
    borderTopWidth?: React.CSSProperties['borderTopWidth']
    borderRightWidth?: React.CSSProperties['borderRightWidth']
    borderBottomWidth?: React.CSSProperties['borderBottomWidth']
    borderLeftWidth?: React.CSSProperties['borderLeftWidth']
    /**
     * the overflow of an element.
     * @default false
     */
    scroll?: boolean
    scrollY?: boolean
    scrollX?: boolean
}

export interface IIconProps extends ISizeProps, IVariantProps {
    /**
     * if true, the Icon element will be rendered with outline border
     * @default false
     **/
    outline?: boolean

    /**
     * if true, the Icon element will be rendered with background color
     * @default false
     **/
    fill?: boolean

    circle?: boolean
    shadow?: boolean
    onClick?: () => void
    source?: ElementType<SVGProps<SVGSVGElement>>
}

export interface IFormProps {
    /**
     * Unique key of form element.
     * @default React.useId()
     **/
    id?: string

    /**
     * Indicates whether the validation failed.
     * @default false
     **/
    error?: boolean

    /**
     * Indicates that the user must specify a value for the input
     * @default false
     */
    required?: boolean

    /**
     * Whether the component is disabled.
     * @default false
     **/
    disabled?: boolean
}
