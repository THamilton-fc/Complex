import { React, useState, useEffect } from 'react';

import ContactModal from '../components/modals/Contact';
import PayModal from '../components/modals/Pay';
import ThanksModal from '../components/modals/Thanks';

function Modal ({ buyItems, addBuyItem }) {
    const [isCurrentModal, setCurrentModal] = useState(1);

    useEffect(() => {
        const data = localStorage.getItem('savedData');
        if (data) {
            setFormData(JSON.parse(data));
        }
    },[]);

    const [formData, setFormData] = useState();
    
    return (
        <div>
            {
                isCurrentModal === 1 && (
                    <ContactModal buyItems={buyItems} formData={formData} setFormData={setFormData} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 2 && (
                    <PayModal buyItems={buyItems} formData={formData} addBuyItem={addBuyItem} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 3 && (
                    <ThanksModal />
                )
            }
        </div>
    );
}

export default Modal;
