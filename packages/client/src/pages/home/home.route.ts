import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import Home from './home.ui'

export const homeRoute: RouteObject = {
    path: '/',
    element: createElement(Home),
    loader: async args => {
        return args
    },
}
