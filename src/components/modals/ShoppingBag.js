import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setModalVisible } from '../../pages/Home/Store/actions';

import findLogo from '../../assets/img/FIndlogo 1.png';

function ShoppingBagModal ({ buyItems, setIsShoppingBagModalVisible }) {
    const [subTotal, setSubTotal] = useState(0);
    useEffect(() => {
        var sum = 0;
        buyItems.map((buyItem) => (
            sum += buyItem.price
        ));
        setSubTotal(sum);
    }, [buyItems]);

    const dispatch = useDispatch();

    const nextStep = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsShoppingBagModalVisible(false);
        dispatch(setModalVisible(true));
    }

    return (
        <div className='font-sans w-[531px] h-auto rounded-2xl bg-white bg-[#FFFFFF] pt-8 px-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <div className='flex gap-x-3 items-center pb-[32px]'>
                <p className='text-[20px] font-semibold tracking-[2px]'>Shopping Bag</p>
            </div>

            <table>
                <tr className='font-mont text-[14px] leading-[17px] tracking-[3px]'>
                    <td></td>
                    <td>Item</td>
                    <td className='pl-[82px]'>Price</td>
                </tr>
                {
                    buyItems.map((buyItem) => (
                        <tr className='font-mont text-[14px] leading-[18px]'>
                            <td className='pr-[53px]'>
                                <img src={buyItem.image} alt='' width={88} />
                            </td>
                            <td className='w-[154px] tracking-[2px]'>{buyItem.name}({buyItem.size})</td>
                            <td className='pl-[82px] tracking-[1px]'>${buyItem.price.toLocaleString("en-US", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                    ))
                }
            </table>

            <div className='w-[451px] border border-[#000000]'></div>

            <div className='pt-[24px] pb-[32px] flex justify-end font-mont text-[14px] leading-[18px] tracking-[2px]'>
                <table>
                    <tr>
                        <td className='pr-[24px]'>Subtotal</td>
                        <td className='flex justify-end'>${subTotal.toLocaleString("en-US", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                    <tr>
                        <td className='pr-[24px]'>Shipping</td>
                        <td className='flex justify-end'>TBD</td>
                    </tr>
                </table>
            </div>

            <button 
                className='mb-[48px] w-[178px] h-[36px] rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
                onClick={nextStep}
            >
                CONTINUE
            </button>
            <div className='flex justify-center items-center gap-x-[8px] float-right mt-[40px]'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src={findLogo} alt='' />
            </div>
        </div>
    );
}

export default ShoppingBagModal;