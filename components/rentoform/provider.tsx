'use client'

import { Provider } from 'jotai'


export default function RentoformProvider({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <Provider>
            {children}
        </Provider>
    )
}