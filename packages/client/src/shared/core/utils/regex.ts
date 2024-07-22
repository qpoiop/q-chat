//영문 숫자 특수기호 조합 8자리이상 16자리이하
const REGEX_PASSWORD = (value: any): boolean => /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/g.test(value)
const REGEX_EMAIL = (value: any): boolean => /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(value)
const REGEX_NUMBER = (value: string) => /^\d+$/g.test(value)
const REGEX_ID = (value: string) => /^[a-zA-Z0-9-_]+$/.test(value)
const DOMAIN_REGEX = (value: string) => /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/.test(value)
const SPECIAL_SYMBOLS = /(\..*?)\..*/g
/**
 * 3자리단위로 숫자컴마를 찍는 정규식
 */
const DIGIT_COMMANS = /\B(?=(\d{3})+(?!\d))/g
/**
 * 실수 정규 표현식
 * @param value 비교할 값
 * @param floatCount 소수점 몇번째까지 가능한지 ex:) floatCount가 3이면 3.333 까지만 체크
 */
const REGEX_FLOAT = (value: string, floatCount: number) => new RegExp(`^\\d+(\\.\\d{0,${floatCount}})?$`).test(value)

/**
 * 글자를 소문자로 변환
 * @param value
 * @constructor
 */
const REGEX_LOWERCASE = (value: string) => value.replace(/^[a-z]/, char => char.toLowerCase())

export { DIGIT_COMMANS, DOMAIN_REGEX, REGEX_EMAIL, REGEX_FLOAT, REGEX_ID, REGEX_LOWERCASE, REGEX_NUMBER, REGEX_PASSWORD, SPECIAL_SYMBOLS }
