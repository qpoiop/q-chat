import { DefaultValue, Second } from '../enums'
import { paddedNumber } from './function'

/**
 * unix timestamp를 YYYY-MM-DD HH:mm:ss 형식 맞춰서 뱉어주는 함수
 * @param unix
 * @returns date format
 */
export const formatDate = (unix: number) => {
    const date = new Date(unix)
    return date.toISOString().replace('T', ' ').substring(0, 19)
}

/**
 * date format을 받아 unix로 conver해주는 함수
 * @param format
 */
export const convertDateToUnix = (date: Date) => {
    return Math.floor(date.getTime() / 1000)
}

/**
 * date format을 받아 unix 00:00:00로 convert해주는 함수
 */
export const unixStartOf = (date: Date) => {
    const startOf = date.setHours(0, 0, 0, 0)
    return Math.floor(startOf / 1000)
}
/**
 * date format을 받아 unix 23:59:59로 convert해주는 함수
 */
export const unixEndOf = (date: Date) => {
    const endOf = date.setHours(23, 59, 59, 0)
    return Math.floor(endOf / 1000)
}

/**
 * 초 단위를 시, 분, 초로 변환해주는 함수
 * @param {number} second // 변환할 초 단위 시간
 * @param {string} unit // 변환한 배열을 문자열로 연결할 요소
 * @returns string[] | string
 */
export const secondToTimeUnit = (second: number, unit: string = DefaultValue.COLON) => {
    const minutes = Math.floor((second % Second.hour) / Second.minute)
    const hour = Math.floor(second / Second.hour)
    const remainingSeconds = Number((second % Second.minute).toFixed(1))
    const convertTime = [paddedNumber(hour), paddedNumber(minutes), paddedNumber(remainingSeconds)]
    return convertTime.join(unit)
}

export type TimeUnit = 'second' | 'minute' | 'hour' | 'millisecond'
/**
 * 초 단위를 시, 분, 초 단위로 환산하는 함수
 * @param {number} second // 변환할 초 단위 시간
 * @param {TimeUnit} unit // 변환할 단위
 * @returns string[] | string
 */
export const secondToTimeRange = (second: number, unit: TimeUnit) => {
    if (unit === 'second') {
        return Math.floor(second % Second.minute)
    } else if (unit === 'minute') {
        return Math.floor((second % Second.hour) / Second.minute)
    } else {
        return Math.floor(second / Second.hour)
    }
}

/**
 * 기존 초시간에 주어진 unit의 시간을 재설정해 리턴해주는 함수
 * @param duration 기존시간
 * @param unit 조정단위
 * @param value 조정시간
 */
export const timeSetter = (duration: number, value: number | string, unit: TimeUnit) => {
    const hours: number = Math.floor(duration / Second.hour)
    const minutes: number = Math.floor((duration % Second.hour) / Second.minute)
    const seconds = Math.floor(duration % Second.minute)
    // eslint-disable-next-line no-magic-numbers
    const millisecond = duration.toString().split('.')?.[1] || '0'

    switch (unit) {
        case 'hour':
            return Number(value) * Second.hour + minutes * Second.minute + seconds + '.' + millisecond
        case 'minute':
            return hours * Second.hour + Number(value) * Second.minute + Number(seconds) + '.' + millisecond
        case 'second':
            return hours * Second.hour + minutes * Second.minute + Number(value) + '.' + millisecond
        case 'millisecond':
            // eslint-disable-next-line no-magic-numbers
            return hours * Second.hour + minutes * Second.minute + seconds + '.' + value
        default:
            return Number(value)
    }
}

/** 현재 시간 기준 방금 전, N분 전, N시간 전, N일 전 등으로 표기하는 함수 */
export const elapsedTime = (date: number): string => {
    const start = date
    const end = Math.floor(new Date().getTime() / 1000)

    const diff = end - start

    const times = [
        // { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
        // { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
        { name: '일', milliSeconds: 60 * 60 * 24 },
        { name: '시간', milliSeconds: 60 * 60 },
        { name: '분', milliSeconds: 60 },
    ]

    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds)

        if (betweenTime > 0) {
            return `${betweenTime}${value.name} 전`
        }
    }
    return '방금 전'
}
