import { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'

export const homeRoute: RouteDefinition = {
    path: '/',
    component: lazy(() => import('./home.ui')),
    preload: args => {},
}
