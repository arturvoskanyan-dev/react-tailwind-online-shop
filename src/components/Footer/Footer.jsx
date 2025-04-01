import React from 'react'
import FooterItem from './FooterItem/FooterItem'

export default function Footer() {
    const footerData = [
        { title: "Exclusive", subtitle: "Subscribe", description: "Get 10% off your first order", extraInfo: "Enter your email" },
        { title: "Support", subtitle: "Armenia", description: "arturvoskanyan.dev@gmail.com", extraInfo: "+374 33 78 37 37" },
        { title: "Account", subtitle: "My Account", description: "Login/Register", extraInfo: "Cart" },
        { title: "Quick Link", subtitle: "Privacy Policy", description: "Terms Of Use", extraInfo: "FAQ" },
        { title: "Download App", subtitle: "Save $3 with App New User Only", extraInfo: "img" }
    ];

    return (
        <footer className="mt-20 bg-black text-white">
            <section className="max-w-7xl mx-auto flex justify-between p-8">
                {footerData.map((elem, index) => {
                    return <FooterItem key={index} {...elem} />
                })}
            </section>
            <div className='text-center border-t-2 border-gray-700'>
                <span className='text-lg text-gray-700'>Copyright Rimel 2022. All right reserved</span>
            </div>
        </footer>
    )
}
