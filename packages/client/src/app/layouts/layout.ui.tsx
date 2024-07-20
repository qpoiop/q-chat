import { Box } from '@/shared/components'
import { Main } from '@/shared/layouts'
import { Asider } from '@/widget/asider'
import { Header } from '@/widget/header'
import { Outlet } from 'react-router-dom'

export function GenericLayout() {
    return (
        <Main>
            <Header />
            <Box flex scrollY>
                <Asider />
                <Outlet />
            </Box>
        </Main>
    )
}
