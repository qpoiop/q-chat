import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import NotFound from './notFound.ui'

export const errorRoute: RouteObject = {
    path: '*',
    element: createElement(NotFound),
    loader: async args => {
        return args
    },
}
