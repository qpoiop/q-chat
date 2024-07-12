/// <reference types="vite/client" />

// SCSS 모듈 타입 선언
declare module '*.scss' {
    const content: { [className: string]: string }
    export default content
}
