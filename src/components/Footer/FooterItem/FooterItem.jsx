import React from 'react'
import { App_Store, Play_Store, qrcode,  FaFacebookF, FiTwitter, FaInstagram, FaLinkedinIn } from "../../index"

export default function FooterItem({ title, subtitle, description, extraInfo }) {
    return (
        <div className='leading-8'>
            <h1 className='text-xl font-medium'>{title}</h1>
            <h3 className='text-sm text-gray-400 font-light'>{subtitle}</h3>
            <p className='text-gray-400'>{description}</p>
            {extraInfo === "Enter your email"
                ? <input className='p-1 border-2 rounded-md' placeholder={extraInfo} />
                : extraInfo === "img"
                    ? <div className='pt-4'>
                        <div className='flex gap-2'>
                            <img src={qrcode} className='w-[60px]' />
                            <div>
                                <img src={App_Store} className='w-[120px]' />
                                <img src={Play_Store} className='w-[120px]' />
                            </div>
                        </div>
                        <div className='flex justify-between pt-4 text-2xl'>
                            <FaFacebookF />
                            <FiTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                    : <p className='text-gray-400'>{extraInfo}</p>
            }
        </div>
    )
}