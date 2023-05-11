import { React, useState, useEffect } from 'react';

import ContactModal from '../components/modals/Contact';
import PayModal from '../components/modals/Pay';
import ThanksModal from '../components/modals/Thanks';

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
                    <ContactModal form={formData} setFormData={setFormData} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
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
