/**
 * for loop type of Object
 * Object.entries(obj) as Entries<typeof obj>.map(([key, value]) => ~
 **/
export type Entries<T> = {
    [Key in keyof T]: [Key, T[Key]]
}[keyof T][]

/** 중첩된 객체에서 모든 키 경로를 사용할 수 있는 타입 */
export type NestedKeyOf<T extends any> = {
    [Key in keyof T & (string | number)]: T[Key] extends object ? `${Key}` | `${Key}.${NestedKeyOf<T[Key]>}` : `${Key}`
}[keyof T & (string | number)]
