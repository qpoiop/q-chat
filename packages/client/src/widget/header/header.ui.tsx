import { Header as CoreUIHeader } from '@/shared/layouts'
import React, { ElementType, SVGProps, useMemo } from 'react'
// import MainLogo from '/public/images/logo.svg?react'

function headerRoot() {
    // const logoContent = useMemo(() => {
    //     return <Icon source={MainLogo as ElementType<SVGProps<SVGSVGElement>>} />
    // }, [])

    return (
        // <CoreUIHeader leftContent={logoContent}>
        //     <div></div>
        // </CoreUIHeader>
    )
}

export default React.memo(headerRoot)
