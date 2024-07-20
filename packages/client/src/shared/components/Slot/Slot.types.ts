interface ISlotOwnProps {
    children?: React.ReactNode
}

export interface ISlotProps extends ISlotOwnProps, React.HTMLAttributes<HTMLElement> {}
