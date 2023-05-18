import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import ContactModal from '../components/modals/Contact';
import PayModal from '../components/modals/Pay';
import ThanksModal from '../components/modals/Thanks';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY);

function Modal () {
    const [isCurrentModal, setCurrentModal] = useState(1);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const data = localStorage.getItem('savedData');
        if (data !== 'undefined' ) {
            setFormData(JSON.parse(data));
        } 
    },[]);

    
    return (
        <div>
            {
                isCurrentModal === 1 && (
                    <Elements stripe={stripePromise}>
                        <ContactModal form={formData} setFormData={setFormData} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                    </Elements>
                )
            }
            {
                isCurrentModal === 2 && (
                    <PayModal form={formData} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 3 && (
                    <ThanksModal form={formData} />
                )
            }
        </div>
    );
}

export default Modal;
