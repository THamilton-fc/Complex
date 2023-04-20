import { React, useState, useEffect } from 'react';

import findLogo from '../../assets/img/FIndlogo 1.png';

function ContactModal ({ buyItems, formData, setFormData, isCurrentModal, setCurrentModal }) {
    const [subTotal, setSubTotal] = useState(0);
    
    useEffect(() => {
        var sum = 0;
        buyItems.map((buyItem) => (
            sum += buyItem.price
        ));
        setSubTotal(sum);
        console.log(sum);
    }, [buyItems]);

    const nextStep = () => {
        isCurrentModal++;
        setCurrentModal(isCurrentModal);
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
        });
        localStorage.setItem('savedData', JSON.stringify(showData));
    }

    const [showData, setShowData] = useState();

    const autoFill = () => {
        setShowData(formData);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setShowData((prevData) => ({ ...prevData,  [name]: value }));
        setFormData((prevData) => ({ ...prevData,  [name]: value }));
    };

    return (
        <div className='font-sans w-[547px] h-auto rounded-2xl bg-white bg-[#FFFFFF] pt-8 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <div className='px-[113px]'>
                <div>
                    <h1 className='text-[18px] tracking-[2px] font-semibold'>Contact Information</h1>
                    <div className='pt-4 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Name</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='name' name='name' autoComplete='name' value={showData?.name || ''} onChange={handleChange} onClick={autoFill} required />
                    </div>
                    <div className='pt-3 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Email Address</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='email' name='email' autoComplete='email' value={showData?.email || ''} onChange={handleChange} onClick={autoFill} required />
                    </div>
                    <h1 className='pt-6 text-[18px] tracking-[2px] font-semibold'>Shipping Address</h1>
                    <div className='pt-4 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Street</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='street' name='street' autoComplete='street' value={showData?.street || ''} onChange={handleChange} onClick={autoFill} required />
                    </div>
                    <div className='pt-4 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Apt/Unit No. (optional)</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='unitno' name='unitno' autoComplete='unitno' value={showData?.unitno || ''} onChange={handleChange} onClick={autoFill} required />
                    </div>
                    <div className='pt-4 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>City</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='city' name='city' autoComplete='city' value={showData?.city || ''} onChange={handleChange} onClick={autoFill} required />
                    </div>
                    <div className='flex gap-x-[12px]'>
                        <div className='pt-4 flex flex-col gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>State</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[175px] rounded-lg h-[40px] px-4' type='text' id='state' name='state' autoComplete='state' value={showData?.state || ''} onChange={handleChange} onClick={autoFill} required />
                        </div>
                        <div className='pt-4 flex flex-col gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>Zip Code</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[133px] rounded-lg h-[40px] px-4' type='text' id='zipcode' name='zipcode' autoComplete='zipcode' value={showData?.zipcode || ''} onChange={handleChange} onClick={autoFill} required />
                        </div>
                    </div>
                    <h1 className='pt-6 text-[18px] tracking-[2px] font-semibold'>Payment Method</h1>
                    <div className='pt-4 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Card Number</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='cardnum' name='cardnum' autoComplete='cardnum' value={showData?.cardnum || ''} onChange={handleChange} onClick={autoFill} required />
                    </div>
                    <div className='flex gap-x-[12px]'>
                        <div className='pt-4 flex flex-col gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>Zip Code</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[175px] rounded-lg h-[40px] px-4' type='text' id='zipcode' name='zipcode' autoComplete='zipcode' value={showData?.zipcode || ''} onChange={handleChange} onClick={autoFill} required />
                        </div>
                        <div className='pt-4 flex flex-col gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>CVV</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[133px] rounded-lg h-[40px] px-4' type='text' id='cvv' name='cvv' autoComplete='cvv' value={showData?.cvv || ''} onChange={handleChange} onClick={autoFill} required />
                        </div>
                    </div>
                </div>
                <div className='pt-8 text-[16px] tracking-[2px] leading-[28px] font-medium'>
                    <div className='flex justify-between items-center'>
                        <p>Subtotal</p>
                        <p>${ subTotal.toLocaleString("en-US", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 }) }</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Shiping</p>
                        <p>TBD</p>
                    </div>
                    <div className='flex pb-6 justify-between items-center'>
                        <p>Tax</p>
                        <p>TBD</p>
                    </div>
                    <div className='border-t border-black pt-2 pb-8'>
                        <div className='flex justify-between items-center'>
                            <p>Total</p>
                            <p>TBD</p>
                        </div>
                    </div>
                </div>
                <button
                    className='w-[227px] h-[36px] mb-[56px] rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
                    onClick={nextStep}
                >
                    ORDER REVIEW
                </button>
            </div>
            <div className='flex justify-center items-center gap-x-[8px] float-right pr-[24px] mt-[-40px]'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src={findLogo} alt='' />
            </div>
        </div>
    );
}

export default ContactModal;