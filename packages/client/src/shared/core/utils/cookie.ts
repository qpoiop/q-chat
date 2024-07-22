/** Get Cookie */
export const getCookie = (key: string) => {
    const result = decodeURIComponent(
        document?.cookie.replace(
            new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'),
            '$1',
        ),
    )
    return result || null
}

/** Cookie 존재 여부 확인  */
export const hasCookie = (key: string) => {
    return new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(document?.cookie)
}
