import React, { useContext } from 'react'
import FooterItem from './FooterItem/FooterItem'
import { MyContext } from '../../App'

export default function Footer() {
    const {footerData} = useContext(MyContext);

    return (
        <footer className="mt-20 bg-black text-white">
            <section className="max-w-7xl mx-auto flex justify-between p-8">
                {footerData.map((elem, index) => {
                    return <FooterItem key={index} {...elem} />
                })}
            </section>
            <div className='text-center border-t-2 border-gray-700'>
                <span className='text-lg text-gray-700'>Copyright 2025. All right reserved. Created by arturvoskayan-dev</span>
            </div>
        </footer>
    )
}
