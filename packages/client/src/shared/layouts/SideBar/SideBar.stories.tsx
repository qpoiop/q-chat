import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Box } from '@/shared/components/Box'
import { Arrow } from '@/shared/components/Icon/Arrow'
import { Shift, Size, Variant } from '@/shared/core'
import styled from 'styled-components'
import { SideBar } from './SideBar'

const meta = {
    component: SideBar,
    argTypes: {
        variant: {
            control: 'radio',
            options: Object.values(Variant),
        },
        width: {
            control: { type: 'range', min: 200, max: 300 },
        },
    },
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof SideBar>

const SCollapseIcon = styled(Arrow)`
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    top: 0;
    right: -12px;
    z-index: 200;
    &:where(:hover) {
        opacity: 0.7;
    }
`

const Template: StoryFn<typeof SideBar> = ({ children, collapse, ...args }) => {
    const [isCollapse, setIsCollase] = useState<boolean>(false)

    useEffect(() => {
        setIsCollase(collapse)
    }, [collapse])

    return (
        <Box style={{ width: 800, height: 500 }} border>
            <SideBar {...args} collapse={isCollapse}>
                <SCollapseIcon
                    outline={true}
                    fill={true}
                    direction={isCollapse ? Shift.Right : Shift.Left}
                    onClick={() => setIsCollase(!isCollapse)}
                    size={Size.S}
                />
                {!isCollapse && 'SideBar'}
            </SideBar>
        </Box>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        variant: Variant.Default,
        collapse: false,
        width: 250,
    },
}
