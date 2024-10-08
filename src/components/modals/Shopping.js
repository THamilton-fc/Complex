import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBuyItems } from '../../pages/Home/Store/actions';

import findLogo from '../../assets/img/FIndlogo 1.png';
import Arrow from '../../assets/img/arrow.png';

function ShoppingModal ({ selectedModal, setSelectedModal, selectedBodySize, setSelectedBodySize }) {
    const dispatch = useDispatch();

    const [ message, setMessage ] = useState('');

    const addToCart = (e) => {
        e.preventDefault();

        var data = {};
        if (selectedModal.productInfo[0].size.BOOL) {
            data = {
                image: selectedModal.productInfo[0].image_url.S,
                name: selectedModal.productInfo[0].name.S,
                size: selectedBodySize,
                price: selectedModal.productInfo[0].price.N * 1
            };
            if (data.size !== 'Size') {
                dispatch(addBuyItems(data));
                setSelectedModal(null);
            } else {
                setMessage('Please select the size');
            }
        } else {
            data = {
                name: selectedModal.productInfo[0].name.S,
                price: selectedModal.productInfo[0].price.N * 1,
                size: false,
                color: selectedModal.productInfo[0].color.S,
                image: selectedModal.productInfo[0].image_url.S
            };
            dispatch(addBuyItems(data));
            setSelectedModal(null);
        }

    }

    const selected = selectedBodySize;

    const [isOpen, setIsOpen] = useState(false);
    const bodysizes = ['Size', 'XXS', 'XS', 'S', 'M', 'L', 'XL'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleBodySizeClick = (bodysize) => {
        setSelectedBodySize(bodysize);
        setMessage('');
        toggleDropdown();
    };

    return (
        <div className='font-sans w-[547px] h-auto rounded-2xl bg-[#FFFFFF] pt-[32px] pl-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <h1 className='text-[20px] font-semibold w-[390px] tracking-[2px] leading-[28px]'>{ selectedModal.productInfo[0].name.S }</h1>
            <div className='flex gap-x-[32px] pt-[24px]'>
                <img src={selectedModal.productInfo[0].image_url.S} alt='' width={200} height={300} />
                <div>
                    <p className='text-black text-[18px] font-semibold pb-[16px]'>${ (selectedModal.productInfo[0].price.N * 1).toLocaleString("en-US", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 }) }</p>
                    <div className='flex gap-x-[20px] pb-[8px] text-[16px] text-black'>
                        <p className='font-semibold'>Sold by</p>
                        <p className='font-medium'>{ selectedModal.productInfo[0].seller.S }</p>
                    </div>
                    <div className='flex gap-x-[48px] pb-[8px] text-[16px] text-black'>
                        <div className='flex gap-x-[8px]'>
                            {
                                selectedModal.productInfo[0].size.BOOL ? (
                                    <div className="relative">
                                        <div
                                            className="appearance-none w-[208px] h-[40px] border border-[#145CE6] rounded-lg px-[16px] py-[6px] bg-no-repeat bg-white"
                                            onClick={toggleDropdown}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-black text-[16px] leading-[28px] tracking-[1px]">{selected}</span>
                                                <div className="flex items-center">
                                                    <img src={Arrow} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {isOpen && (
                                            <div className="absolute z-50 bg-white rounded-lg shadow-lg border border-[#145CE6] w-[208px] mt-[-40px]">
                                                {bodysizes.map((bodysize) => (
                                                    <div
                                                        key={bodysize}
                                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
                                                        onClick={() => handleBodySizeClick(bodysize)}
                                                    >
                                                        {bodysize}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <span className="text-[12px] pl-2 text-[#ff0000]">{message}</span>
                                    </div>
                                ) : (
                                    <div className='flex gap-x-[20px] pb-[8px] text-[16px] text-black'>
                                        <p className='font-semibold w-[60px]'>Color</p>
                                        <p className='font-medium'>{selectedModal.productInfo[0].color.S}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <p className='pt-[16px] pb-[32px] text-[#767676] text-[12px] tracking-[2px]'>Ships to New York from London</p>
                    <button 
                        className='w-[208px] h-[40px] mb-[76px] rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
                        onClick={addToCart}
                    >
                       ADDED TO CART 
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center gap-x-[8px] float-right mt-[-40px] pr-[24px]'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src={findLogo} alt='' />
            </div>
        </div>
    );
}

export default ShoppingModal;
