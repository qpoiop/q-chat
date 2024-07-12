import { homeRoute } from '@/pages/home'
import { Router, type RouteDefinition } from '@solidjs/router'
import { GenericLayout } from '../layouts'

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: GenericLayout,
        children: [homeRoute],
    },
]

export function RouterProvider() {
    return <Router>{routes}</Router>
}
