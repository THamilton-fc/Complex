import React from 'react';

import vectorImage from '../../assets/img/Vector.png';
import findLogo from '../../assets/img/FIndlogo 1.png';

function ThanksModal () {

    return (
        <div className='font-sans w-[576px] h-[434px] rounded-2xl bg-white bg-[#FFFFFF] pt-8 px-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <div className='flex gap-x-3 items-center'>
                <div className='bg-[#145CE6] w-6 h-6 rounded-full flex justify-center items-center'>
                    <img src={vectorImage} alt='' />
                </div>
                <p className='text-[20px] font-semibold tracking-[2px]'>Thank you for your purchase!</p>
            </div>
            <p className='pt-6 text-[16px] font-medium tracking-[2px]'>Order confirmation sent to akcange@gmail.com.</p>
            <p className='pt-3 text-[#767676] text-[14px] tracking-[2px]'>Estimated delivery time: 5 to 7 business days</p>
            <div className='mt-9 pt-10 border-t border-black'>
                <p className='text-[16px] tracking-[2px] font-medium'>Create an account with us for faster checkout.</p>
                <div className='pt-6 flex gap-x-[20px]'>
                    <div>
                        <label className='text-[14px] tracking-[2px]'>Create Password</label>
                        <input className='p-2 bg-[#F5F5F5] rounded-lg w-[240px] h-10' type='password' />
                    </div>
                    <div>
                        <label className='text-[14px] tracking-[2px]'>Confirm Password</label>
                        <input className='p-2 bg-[#F5F5F5] rounded-lg w-[240px] h-10' type='password' />
                    </div>
                </div>
            </div>
            <button 
                className='mt-8 w-[240px] h-9 rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
            >
                CREATE ACCOUNT
            </button>
            <div className='flex justify-center items-center gap-x-[8px] float-right pt-[65px] mr-[-10px]'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src={findLogo} alt='' />
            </div>
        </div>
    );
}

export default ThanksModal;