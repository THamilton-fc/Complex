import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GooglePayButton from '@google-pay/button-react';
// import { ApplePayButton } from 'react-apple-pay-button';

import { setClientSecret } from '../../pages/Home/Store/actions';

function ContactModal({ form, setFormData, isCurrentModal, setCurrentModal }) {
    const [subTotal, setSubTotal] = useState(0);

    const dispatch = useDispatch();
    const homeStore = useSelector((state) => state.dashboard);
    const { buyItems } = homeStore;

    useEffect(() => {
        var sum = 0;
        buyItems.map((buyItem) => (
            sum += buyItem.price
        ));
        setSubTotal(sum);
    }, [buyItems]);

    const nextStep = () => {
        isCurrentModal++;
        setCurrentModal(isCurrentModal);
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
        });
        localStorage.setItem('savedData', JSON.stringify(showData));
        dispatch(setClientSecret(subTotal * 100));
    }

    const [showData, setShowData] = useState();

    const autoFill = () => {
        setShowData(form);
    };

    const handleCardDisplay = () => {
        if (!showData || !showData.cardNum) {
            return ('');
        } else {
            const rawText = [...showData.cardNum.split(' ').join('')];
            const creditCard = [];
            rawText.forEach((t, i) => {
                if (i % 4 === 0 && i !== 0) creditCard.push(' ')
                creditCard.push(t)
            });
            return creditCard.join('');
        }
    }

    const handleExpriyDisplay = () => {
        if (!showData || !showData.expDate) {
            return ('');
        } else {
            const expdate = showData.expDate;
            const expDateFormatter =
                expdate.replace(/\//g, "").substring(0, 2) +
                (expdate.length > 2 ? "/" : "") +
                expdate.replace(/\//g, "").substring(2, 4);

            return expDateFormatter;
        }
    };

    const handlePhoneDisplay = () => {
        if (!showData || !showData.phoneNum) {
            return ('');
        } else {
            const rawText = [...showData.phoneNum.split(' ').join('')];
            const phone_number = [];
            rawText.forEach((t, i) => {
                if (i === 2 || i === 5 || i === 8) phone_number.push(' ');
                phone_number.push(t);
            });
            return phone_number.join('');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setShowData((prevData) => ({ ...prevData, [name]: value }));
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const applePay = () => {
        console.log('apple');
        const request = {
            countryCode: 'US',
            currencyCode: "usd",
            merchantCapabilities: ["supports3DS"],
            supportedNetworks: ["visa", "masterCard"],
            total: {
                label: "Demo (Card is not charged)",
                type: "final",
                amount: subTotal
            }
        };
        if (!window.ApplePaySession) {
            alert("ApplePaySession is undefined. Use Safari for testing.");
        } else {
            console.log('APPLEPAYSESSION', window.ApplePaySession);
            const session = new window.ApplePaySession(3, request);
            console.log(session);
            window.ApplePaySession = session;
            console.log('ApplePaySession', window.ApplePaySession);

            // session.onvalidatemerchant = async (event) => {
            //     // Call your own server to request a new merchant session.
            //     const merchantSession = await validateMerchant();
            //     session.completeMerchantValidation(merchantSession);
            // };

            session.onpaymentmethodselected = (event) => {
                const update = {};
                session.completePaymentMethodSelection(update);
            };

            session.onshippingmethodselected = (event) => {
                const update = {};
                session.completeShippingMethodSelection(update);
            };

            session.onshippingcontactselected = (event) => {
                const update = {};
                session.completeShippingContactSelection(update);
            };

            session.onpaymentauthorized = (event) => {
                const result = {
                    status: window.ApplePaySession.STATUS_SUCCESS
                };
                session.completePayment(result);
            };

            session.oncancel = (event) => {
            };

            session.begin();
        }
    };

    return (
        <div className='font-sans w-[547px] h-auto rounded-2xl bg-white bg-[#FFFFFF] pt-8 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
            <form className='px-[113px]' onSubmit={nextStep}>
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
                    <div className='pt-3 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Phone Number</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='phoneNum' name='phoneNum' autoComplete='phoneNum' maxLength={15} value={handlePhoneDisplay()} onChange={handleChange} onClick={autoFill} required />
                    </div>

                    <h1 className='pt-6 text-[18px] tracking-[2px] font-semibold'>Shipping Address</h1>

                    <div className='pt-4 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Street</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='street' name='street' autoComplete='street' value={showData?.street || ''} onChange={handleChange} onClick={autoFill} required />
                    </div>
                    <div className='pt-4 flex flex-col gap-y-[8px]'>
                        <label className='text-[14px] tracking-[2px]'>Apt/Unit No. (optional)</label>
                        <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[320px] rounded-lg h-[40px] px-4' type='text' id='unitno' name='unitno' autoComplete='unitno' value={showData?.unitno || ''} onChange={handleChange} onClick={autoFill} s />
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

                    <div className='flex gap-x-[12px] pt-[16px]'>
                        <GooglePayButton
                            environment="TEST"
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'stripe',
                                                stripe_version: '2022-11-15',
                                                stripe_publishableKey: process.env.REACT_APP_STRIPE_PK_KEY
                                            },
                                        },
                                    },
                                ],
                                merchantInfo: {
                                    merchantId: 'RCTST0000008099',
                                    merchantName: 'NNDMVVYW421S1',
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: `${subTotal}`,
                                    currencyCode: 'USD',
                                    countryCode: 'US',
                                },
                                shippingAddressRequired: true,
                                callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                            }}
                            onLoadPaymentData={paymentRequest => {
                                console.log('Success', paymentRequest);
                            }}
                            onPaymentAuthorized={paymentData => {
                                console.log('Payment Authorised Success', paymentData)
                                return { transactionState: 'SUCCESS' }
                            }
                            }
                            onPaymentDataChanged={paymentData => {
                                console.log('On Payment Data Changed', paymentData)
                                return {}
                            }
                            }
                            existingPaymentMethodRequired='false'
                            buttonColor='white'
                            buttonType='plain'
                            buttonSizeMode='fill'
                            className='w-[154px]'
                        />
                        <button type='button' onClick={applePay} className='flex w-[154px] h-[40px] bg-black rounded-lg items-center justify-center'>
                            <img className="h-[38px]" src='/images/ApplePay.png' alt='' />
                        </button>
                        {/* <div className='w-[154px] h-[70px]'>
                            <ApplePayButton theme="dark">{""}</ApplePayButton>
                        </div> */}
                    </div>
                    <div className='flex items-center justify-center gap-x-[8px] pt-[24px]'>
                        <div className='w-[95px] h-[0px] border-[0.5px] border-[#D4D4D4]'></div>
                        <p className='text-[12px] text-[#767676] tracking-[1px]'>Or pay with card</p>
                        <div className='w-[95px] h-[0px] border-[0.5px] border-[#D4D4D4]'></div>
                    </div>
                    <div className='flex gap-x-[12px] w-full'>
                        <div className='pt-4 flex flex-col w-[75%] gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>Card Number</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] rounded-lg h-[40px] px-4' type='text' id='cardNum' name='cardNum' autoComplete='cardNum' value={handleCardDisplay()} maxLength="19" onChange={handleChange} onClick={autoFill} required />
                        </div>
                        <div className='pt-4 flex flex-col w-[25%] gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>Exp Date</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] rounded-lg h-[40px] px-4' type='text' id='expDate' name='expDate' autoComplete='expDate' value={handleExpriyDisplay()} onChange={handleChange} onClick={autoFill} required />
                        </div>
                    </div>
                    <div className='flex gap-x-[12px]'>
                        <div className='pt-4 flex flex-col gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>Zip Code</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[175px] rounded-lg h-[40px] px-4' type='text' id='zipcode' name='zipcode' autoComplete='zipcode' value={showData?.zipcode || ''} onChange={handleChange} onClick={autoFill} required />
                        </div>
                        <div className='pt-4 flex flex-col gap-y-[8px]'>
                            <label className='text-[14px] tracking-[2px]'>CVV</label>
                            <input className='text-[14px] tracking-[2px] font-medium bg-[#F5F5F5] w-[133px] rounded-lg h-[40px] px-4' type='text' id='cvv' name='cvv' autoComplete='cvv' maxLength="3" pattern="[0-9][0-9][0-9]" value={showData?.cvv || ''} onChange={handleChange} onClick={autoFill} required />
                        </div>
                    </div>
                </div>
                <div className='pt-8 text-[16px] tracking-[2px] leading-[28px] font-medium'>
                    <div className='flex justify-between items-center'>
                        <p>Subtotal</p>
                        <p>${subTotal.toLocaleString("en-US", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
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
                    type='submit'
                    className='w-[227px] h-[36px] mb-[56px] rounded-lg bg-[#145CE7] text-[16px] text-white font-semibold'
                >
                    ORDER REVIEW
                </button>
            </form>
            <div className='flex justify-center items-center gap-x-[8px] float-right pr-[24px] mt-[-40px]'>
                <p className='text-[#767676] text-[12px]'>Powered by</p>
                <img className='w-[51px] h-[20px]' src="/images/Findlogo 1.png" alt='' />
            </div>
        </div>
    );
}

export default ContactModal;