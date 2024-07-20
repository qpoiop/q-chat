import { GenericLayout } from '@/app/layouts'
import { homeRoute } from '@/pages/home'
import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'

function BubbleError() {
    const error = useRouteError()
    if (error) throw error
    return <></>
}

const router = createBrowserRouter([
    {
        errorElement: <BubbleError />,
        children: [
            // signinRoute,
            {
                element: <GenericLayout />,
                children: [homeRoute],
                // loader: async () => {
                // const isAuthorization = hasCookie('Authorization')
                // if (!isAuthorization) return redirect('/signin')
                // return isAuthorization
                // },
            },
            // {
            //     path: '*',
            //     loader: async () => redirect('/'),
            // },
        ],
    },
])

export function BrowserRouter() {
    return (
        <Suspense fallback={null}>
            <RouterProvider router={router} />
        </Suspense>
    )
}
