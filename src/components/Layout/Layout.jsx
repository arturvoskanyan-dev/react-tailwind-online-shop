import React from 'react'
import { Header, Footer } from "../index"
import { Outlet } from 'react-router-dom'

export default function Layout({footerData}) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer footerData={footerData} />
        </>
    )
}
