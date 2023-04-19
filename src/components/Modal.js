import { React, useState } from 'react';

import ShoppingBagModal from '../components/modals/ShoppingBag';
import ContactModal from '../components/modals/Contact';
import PayModal from '../components/modals/Pay';
import ThanksModal from '../components/modals/Thanks';

function Modal ({ buyItems, addBuyItem }) {
    const [isCurrentModal, setCurrentModal] = useState(1);
    
    return (
        <div>
            {
                isCurrentModal === 1 && (
                    <ShoppingBagModal buyItems={buyItems} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 2 && (
                    <ContactModal buyItems={buyItems} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 3 && (
                    <PayModal buyItems={buyItems} addBuyItem={addBuyItem} isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 4 && (
                    <ThanksModal />
                )
            }
        </div>
    );
}

export default Modal;
