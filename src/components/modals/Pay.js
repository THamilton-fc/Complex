import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBuyItems } from '../../pages/Home/Store/actions';

import findLogo from '../../assets/img/FIndlogo 1.png';

function PayModal ({ form, isCurrentModal, setCurrentModal }) {
    const dispatch = useDispatch();
    const homeStore = useSelector((state) => state.dashboard);
    const { buyItems } = homeStore;

    const nextStep = () => {
        isCurrentModal++;
        setCurrentModal(isCurrentModal);
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
        });
        
        dispatch(setBuyItems([]));
    }

    const [subTotal, setSubTotal] = useState(0);
    useEffect(() => {
        var sum = 0;
        buyItems.map((buyItem) => (
            sum += buyItem.price
        ));
        setSubTotal(sum);
    }, [buyItems]);

    return (
        <div className='font-mont w-[531px] h-auto rounded-2xl bg-white bg-[#FFFFFF] pt-8 px-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <div>
                <p className='text-[20px] font-semibold traking-[2px] pb-8'>Order Review</p>
                
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
                        <tr>
                            <td className='pr-[24px]'>Tax</td>
                            <td className='flex justify-end'>TBD</td>
                        </tr>
                        <tr className='font-semibold'>
                            <td className='pr-[24px]'>Total</td>
                            <td className='flex justify-end'>$2,073.00</td>
                        </tr>
                    </table>
                </div>

                <p className='text-[20px] font-semibold traking-[2px] pb-[20px]'>Shipping Information</p>

                <div className='pt-8 text-[14px] tracking-[2px]'>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='pb-4'>Name</td>
                                <td className='pb-4'>{form.name}</td>
                                <td className='pb-4'>
                                    <button className='text-[#145CE6] font-semibold'>EDIT</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='pb-8'>Email</td>
                                <td className='pb-8'>{form.email}</td>
                            </tr>
                            <tr>
                                <td className='pb-6'>Shipping</td>
                                <td className='pb-6'>
                                    <p>{form.street}, {form.unitno} </p>
                                    <p>{form.city}, {form.zipcode}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Payment</td>
                                <td>VISA ending in 1110</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button 
                    className='mt-10 mb-[76px] w-[170px] h-9 rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
                    onClick={nextStep}    
                >
                    PAY NOW
                </button>
            </div>
            <div className='flex justify-center items-center gap-x-[8px] float-right mt-[-40px]'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src={findLogo} alt='' />
            </div>
        </div>
    );
}

export default PayModal;