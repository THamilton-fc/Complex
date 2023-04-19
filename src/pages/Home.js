import { React, useState, useEffect, useRef } from 'react';

import shopping_mark_blue from '../assets/img/union.png';
import shopping_mark_white from '../assets/img/shop-mark.png';

import Modal from '../components/Modal';
import ShoppingModal from '../components/modals/Shopping';

function Home () {
    const topData = {
        image: "/images/sample-top.png",
        name: "Political Campaign Sweatshirt Regular Fit in Black",
        price: 1050.00,
        sold: "Balenciaga"
    };
    const pantsData = {
        image: "/images/sample-pants.png",
        name: "AMIRI Graphic-print Straight-leg Trousers",
        price: 806.00,
        sold: "Farfetch"
    };

    const [isTopModalVisible, setIsTopModalVisible] = useState(false);
    const topModalRef = useRef(null);
    const [isPantsModalVisible, setIsPantsModalVisible] = useState(false);
    const pantsModalRef = useRef(null);
    const [buyItems, addBuyItem] = useState([]);
    const [isPayModalVisible, setIsPayModalVisible] = useState(false);
    const PayModalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (topModalRef.current && !topModalRef.current.contains(event.target)) {
            setIsTopModalVisible(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [topModalRef]);
    
    useEffect(() => {
        function handleClickOutside(event) {
          if (pantsModalRef.current && !pantsModalRef.current.contains(event.target)) {
            setIsPantsModalVisible(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [pantsModalRef]);

    useEffect(() => {
        function handleClickOutside(event) {
          if (PayModalRef.current && !PayModalRef.current.contains(event.target)) {
            setIsPayModalVisible(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [PayModalRef]);

    const handleTopShoppingButton = () => {
        setIsTopModalVisible(true);
    };

    const handlePantsShoppingButton = () => {
        setIsPantsModalVisible(true);
    };

    const showCheckout = () => {
        setIsPayModalVisible(true);
    };

    return (
        <div className='pr-[15px] pt-2'>
            <div className=''>
                <img className='px-1' src='https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/gtuwosplzheykjybv2r0/blxst-melbourne-australia?fimg-ssr-default' alt='' />
            </div>

            <div className='relative pt-[140px] flex justify-center items-center'>
                <img src='https://images.complex.com/complex/images/c_crop,h_1446,w_1170,x_0,y_309/c_fill,dpr_auto,f_auto,q_auto,w_920/fl_lossy,pg_1/c9xdoxymexuijdmowutr/blxst-melbourne?fimg-client' alt='' />
                <div className='absolute top-[534px] left-[895px]'>
                    <button 
                        className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-lg'
                        onClick={handleTopShoppingButton}
                    >
                        <img src={shopping_mark_blue} alt='' />
                    </button>
                    {
                        isTopModalVisible && 
                        <div ref={topModalRef} className='pt-4'>
                            <ShoppingModal itemData={topData} buyItems={buyItems} addBuyItem={addBuyItem} />
                        </div>
                    }
                </div>
                <div className='absolute top-[1034px] left-[585px]'>
                    <button 
                        className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-lg'
                        onClick={handlePantsShoppingButton}
                    >
                        <img src={shopping_mark_blue} alt='' />
                    </button>
                    {
                        isPantsModalVisible && 
                        <div ref={pantsModalRef} className='pt-4'>
                            <ShoppingModal itemData={pantsData} buyItems={buyItems} addBuyItem={addBuyItem} />
                        </div>
                    }
                </div>
            </div>

            {
                buyItems.length !== 0 && 
                <div 
                    className='absolute top-[86px] right-[24px] cursor-pointer'
                    onClick={showCheckout}
                >
                    <div className='w-[163px] h-[40px] flex justify-evenly items-center bg-[#145CE6] rounded-lg '>
                        <img src={shopping_mark_white} alt='' />
                        <p className='text-white font-mont font-semibold text-[16px] leading-[28px] tracking-[1px]'>CHECK OUT</p>
                    </div>
                        <div className='absolute top-[-10px] right-[-10px] w-[20px] h-[20px] flex justify-center items-center bg-[#ff0000] rounded-full'>
                            <p className='text-white font-mont text-[14px] font-semibold'>{ buyItems.length }</p>
                        </div>
                </div>
            }
            {
                isPayModalVisible && 
                <div ref={PayModalRef} className='absolute top-[142px] right-[24px]'>
                    <Modal buyItems={buyItems} addBuyItem={addBuyItem} />
                </div>
            }

        </div>
    );
}

export default Home;
