/**
 * URL QUERYPARAM 변환함수
 * @param url base og_master_path
 * @param object query string object
 */
export const queryStringify = <T extends object>(url: string, object: T) => {
    return Object.entries(object).reduce((prev, next) => {
        const [key, value = ''] = next
        return value ? prev + `${key}=${value}&` : prev
    }, url + '?')
}

export const combineUrls = (urlList: Array<string>) => urlList.filter(url => !!url).join('/')
