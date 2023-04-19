import React from 'react';

import sampleImage from '../../assets/img/sample.png';
import findLogo from '../../assets/img/FIndlogo 1.png';

function PayModal ({ isCurrentModal, setCurrentModal }) {
    const nextStep = () => {
        isCurrentModal++;
        setCurrentModal(isCurrentModal);
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
        });
    }

    return (
        <div className='font-sans w-[531px] h-[557px] rounded-2xl bg-white bg-[#FFFFFF] pt-8 px-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <div>
                <p className='text-[20px] traking-[2px] pb-8'>Order Review</p>
                <div className='flex border-b border-black pb-10'>
                    <img className='w-[87px] h-[100px]' src={sampleImage} alt='' />
                    <div className='text-[14px] tracking-[2px] px-[52px]'>
                        <p className='pb-4'>Item</p>
                        <p className='font-medium w-[180px]'>EKD Print Stretch Tulle Turtleneck Bodysuit (S)</p>
                    </div>
                    <div className='text-[14px] tracking-[2px]'>
                        <p className='pb-4'>Total</p>
                        <p className='font-medium'>$1,100.00</p>
                    </div>
                </div>
                <div className='pt-8 text-[14px] tracking-[2px]'>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='pb-4'>Name</td>
                                <td className='pb-4'>Akeii Cange</td>
                                <td className='pb-4'>
                                    <button className='text-[#145CE6] font-semibold'>EDIT</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='pb-8'>Email</td>
                                <td className='pb-8'>akcange@gmail.com</td>
                            </tr>
                            <tr>
                                <td className='pb-6'>Shipping</td>
                                <td className='pb-6'>
                                    <p>122 W 5th Ave, Apt 606</p>
                                    <p>New York, NY 10008</p>
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
                    className='mt-10 w-[170px] h-9 rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
                    onClick={nextStep}    
                >
                    PAY NOW
                </button>
            </div>
            <div className='flex justify-center items-center gap-x-[8px] float-right'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src={findLogo} alt='' />
            </div>
        </div>
    );
}

export default PayModal;