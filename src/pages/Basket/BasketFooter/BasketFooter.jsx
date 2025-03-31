import React from 'react'
import { CustomButton } from '../../../components'
import { useNavigate } from 'react-router-dom';
import BorderRow from './BorderRow/BorderRow';

export default function BasketFooter({products}) {
    let navigate = useNavigate();
    const total = parseInt(products?.reduce((acc, elem) => acc += elem.price * elem.count, 0));

    return (
        <div className='pt-8'>
            <div className='flex justify-between'>
                <CustomButton click={() => navigate("/")}>Return To Shop</CustomButton>
                <CustomButton>Update Cart</CustomButton>
            </div>
            <div className='py-12 flex justify-between'>
                <div>
                    <input
                        type="text"
                        placeholder='Coupen Code'
                        className='p-3 mr-2 w-60 border-2 border-gray-500 rounded-md'
                    />
                    <CustomButton bg="button2" color="white">Apply Coupon</CustomButton>
                </div>
                <div className='p-4 max-w-basket-footer w-full flex flex-col gap-4 border-2 rounded-md'>
                    <h2 className='text-xl font-medium'>Cart Total</h2>
                    <BorderRow label="Subtotal" value={total} />
                    <BorderRow label="Shipping" value="Free" />
                    <BorderRow label="Total" value={total} border={false} />
                    <div className='text-center'>
                        <CustomButton bg="button2" color="white">Procees to checkout</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
