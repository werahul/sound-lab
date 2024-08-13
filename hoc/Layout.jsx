import Sidebar from '@/components/Sidebar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <div className=''>
                <Sidebar />
            </div>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
