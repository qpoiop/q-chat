import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import SigninRoot from './signin.ui'

export const signinRoute: RouteObject = {
    path: '/',
    element: createElement(SigninRoot),
    loader: async args => {
        return args
    },
}
