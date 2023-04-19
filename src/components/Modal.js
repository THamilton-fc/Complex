import { React, useState } from 'react';

import ShoppingModal from '../components/modals/Shopping';
import ContactModal from '../components/modals/Contact';
import PayModal from '../components/modals/Pay';
import ThanksModal from '../components/modals/Thanks';

function Modal () {
    const [isCurrentModal, setCurrentModal] = useState(1);

    return (
        <div>
            {
                isCurrentModal === 1 && (
                    <ShoppingModal isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 2 && (
                    <ContactModal isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
                )
            }
            {
                isCurrentModal === 3 && (
                    <PayModal isCurrentModal={isCurrentModal} setCurrentModal={setCurrentModal} />
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
