import React from 'react';

import sampleImage from '../../assets/img/sample.png';
import findLogo from '../../assets/img/FIndlogo 1.png';
import BodySize from '../BodySize';

function ShoppingModal ({ isCurrentModal, setCurrentModal }) {
    const nextStep = () => {
        isCurrentModal++;
        setCurrentModal(isCurrentModal);
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
        });
    }
    
    return (
        <div className='font-sans w-[547px] h-[393px] rounded-2xl bg-[#FFFFFF] pt-[32px] pl-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <h1 className='text-[20px] font-semibold w-[390px] tracking-[2px] leading-[28px]'>EKD Print Stretch Tulle Turtleneck Bodysuit</h1>
            <div className='flex gap-x-[32px] pt-[24px]'>
                <img src={sampleImage} alt='' />
                <div>
                    <p className='text-black text-[18px] font-semibold pb-[16px]'>$1,050.00</p>
                    <div className='flex gap-x-[20px] pb-[8px] text-[16px] text-black'>
                        <p className='font-semibold'>Sold by</p>
                        <p className='font-medium'>Burberry</p>
                    </div>
                    <div className='flex gap-x-[48px] pb-[8px] text-[16px] text-black'>
                        <div className='flex gap-x-[8px]'>
                            <BodySize />
                        </div>
                    </div>
                    <p className='pt-[16px] pb-[32px] text-[#767676] text-[12px] tracking-[2px]'>Ships to New York from London</p>
                    <button 
                        className='w-[172px] h-[36px] rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
                        onClick={nextStep}
                    >
                       BUY NOW 
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center gap-x-[8px] float-right pt-[19px] pr-[24px]'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src={findLogo} alt='' />
            </div>
        </div>
    );
}

export default ShoppingModal;