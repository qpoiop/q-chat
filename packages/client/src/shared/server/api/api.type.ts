import { AxiosResponse } from 'axios'

export interface ServerResponse<T> {
    body: T
    code: string
    message?: string
}

export type AxiosServerResponse<T> = AxiosResponse<ServerResponse<T>>
