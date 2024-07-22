import { DefaultValue, Second } from '../enums'
import { Entries } from '../types'
import { DIGIT_COMMANS } from './regex'

/**
 * 값이 없을경우 하이픈 리턴
 * @param sentence
 */
export const convertBlank2Hyphen = (sentence: any) => {
    if (typeof sentence === 'string') {
        return sentence || DefaultValue.HYPHEN
    } else {
        return sentence ?? DefaultValue.HYPHEN
    }
}

/**
 * 숫자 앞에 0 붙이는 함수
 * @param {number} targetNumber
 */
export const paddedNumber = (targetNumber: number) => {
    const padNumber = 2
    return targetNumber.toString().padStart(padNumber, '0')
}

/**
 * 값이 없을경우 하이픈 리턴
 * @param sentence
 * @param returnType
 */
export const convertBlankHyphen = (sentence: string | number, returnType: string = DefaultValue.HYPHEN) => {
    if (typeof sentence === 'string') {
        return sentence || returnType
    } else {
        return sentence ?? returnType
    }
}

/**
 * 첫번째 객체의 키와 일치하는 두번째 객체의 값으로 병합
 * @param object1
 * @param object2
 */
export const leftJoin = <T extends object>(object1: T, object2: T) => {
    if (!object2) return object1
    return (Object.entries(object1) as Entries<typeof object1>).reduce(
        (acc, cur) => {
            const [key, value] = cur
            acc[key] = object2[key] ?? value
            return acc
        },
        { ...object1 },
    )
}

/**
 * Byte단위 변환함수
 * @param bytes
 */
export const formatByte = (bytes: number) => {
    if (bytes === 0) return '0B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    // 사용량감소(- 인경우)
    let absFlag = false
    if (bytes < 0) {
        bytes = Math.abs(bytes)
        absFlag = true
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    const reg = /(^[+-]?\d+)(\d{3})/
    let convertNumber = (bytes / Math.pow(k, i)).toFixed(2)
    while (reg.test(convertNumber)) convertNumber = convertNumber.replace(reg, '$1' + ',' + '$2')
    return (absFlag ? '-' : '') + convertNumber + ' ' + sizes[i]
}

/**
 * bps 데이터 단위 변경
 * @param fileSizeBytes
 * @param seconds
 * @param decimals
 */
export const formatBps = (fileSizeBytes: number, seconds: number, decimals: number = 2) => {
    if (!fileSizeBytes) return '0 bps'

    // 파일 크기를 초당 속도로 변환
    // let speedBps: number = fileSizeBytes / seconds

    // 단위를 정의하고 해당 단위에 따라 속도를 변환
    const units: string[] = ['bps', 'Kbps', 'Mbps', 'Gbps']
    let unitIndex: number = 0
    while (fileSizeBytes >= seconds && unitIndex < units.length - 1) {
        fileSizeBytes /= seconds
        unitIndex++
    }

    const speedFormatted: string = `${fileSizeBytes.toFixed(decimals)} ${units[unitIndex]}`
    return speedFormatted
}

export const formatKbps = (bps: number = DefaultValue.ZERO) => {
    if (typeof bps !== 'number' || isNaN(bps)) return '0 Kbps'
    // eslint-disable-next-line no-magic-numbers
    return `${Number((bps / Second.milliseconds).toFixed(2))} Kbps`
}

export const formatHz = (fileSizeHz: number, seconds: number, decimals: number = 2) => {
    if (!fileSizeHz) return '0 bps'

    // 파일 크기를 초당 속도로 변환
    // let speedBps: number = fileSizeBytes / seconds

    // 단위를 정의하고 해당 단위에 따라 속도를 변환
    const units: string[] = ['Hz', 'KHz', 'MHz', 'GHz']
    let unitIndex: number = 0
    while (fileSizeHz >= seconds && unitIndex < units.length - 1) {
        fileSizeHz /= seconds
        unitIndex++
    }

    const speedFormatted: string = `${Number(fileSizeHz.toFixed(decimals))} ${units[unitIndex]}`
    return speedFormatted
}

/**
 * 숫자를 받아 3자리단위로 콤마를 찍어 리턴해주는 함수
 * @param num
 */
export const convertDigitCommas = (num: number) => {
    if (num) {
        return num.toString().replace(DIGIT_COMMANS, DefaultValue.COMMA)
    } else {
        return num
    }
}
