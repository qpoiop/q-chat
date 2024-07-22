import { IComponentProps, ISizeProps } from '@/shared/core'

interface IPaginationOwnProps {
    page?: number
    pageSize?: number
    onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void

    /**
     * The total count of rows
     * @default 0
     */
    totalCount?: number

    float?: boolean
    disabled?: boolean
    border?: boolean
    loading?: boolean

    /**
     * The count of rows per page
     * @default 10
     **/
    offset?: number
}

export interface IPaginationProps extends IPaginationOwnProps, IComponentProps, ISizeProps {}

export interface IPagenationItemProps {}
