import axiosOrigin, { AxiosRequestConfig } from 'axios'
import { HTTP_METHOD } from './api.const'

const instance = axiosOrigin.create({
    baseURL: '', // todo baseURL
    timeout: 5000,
    withCredentials: true,
})

const makeRequest = (request?: AxiosRequestConfig): AxiosRequestConfig => ({
    url: request.url,
    method: request.method ?? HTTP_METHOD.GET,
    responseType: 'json',
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    ...request,
})

export const fetchApi = async (request?: AxiosRequestConfig) => {
    return instance(makeRequest(request))
}
