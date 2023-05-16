import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setProductInfo, setModalVisible } from './Store/actions';
import ShoppingModal from '../../components/modals/Shopping';
import Modal from '../../components/Modal';

function Home() {
    const [selectedModal, setSelectedModal] = useState(null);
    const [selectedBodySize, setSelectedBodySize] = useState('Size');


    const modalRef = useRef(null);
    const shoppingModalRef = useRef(null);

    const dispatch = useDispatch();
    const homeStore = useSelector((state) => state.dashboard);
    const { productInfo, isModalStatus } = homeStore;

    useEffect(() => {
        dispatch(setModalVisible(false));
        dispatch(setProductInfo());
    }, [dispatch]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                dispatch(setModalVisible(false));
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, dispatch]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (shoppingModalRef.current && !shoppingModalRef.current.contains(event.target)) {
                setSelectedModal(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [shoppingModalRef]);

    const handleShoppingButton = (product) => {
        setSelectedModal(product);
    }

    // const data = [
    //     {
    //         "id": 1,
    //         "productInfo": [
    //             {
    //                 "size": {
    //                     "BOOL": true
    //                 },
    //                 "seller": {
    //                     "S": "Farfetch"
    //                 },
    //                 "bucket_name": {
    //                     "S": "AMIRI Graphic-print Straight-leg Trousers"
    //                 },
    //                 "image_url": {
    //                     "S": "https://findcommercedemo.s3.us-east-2.amazonaws.com/AMIRI+Graphic-print+Straight-leg+Trousers/sample-pants.png"
    //                 },
    //                 "price": {
    //                     "N": "806"
    //                 },
    //                 "id": {
    //                     "N": "2"
    //                 },
    //                 "name": {
    //                     "S": "AMIRI Graphic-print Straight-leg Trousers"
    //                 },
    //                 "color": {
    //                     "S": ""
    //                 }
    //             }
    //         ],
    //         "itemInfo": {
    //             "name": "AMIRI Graphic-print Straight-leg Trousers",
    //             "value": 0.6390124559402466,
    //             "position": {
    //                 "top_row": 0.6555254459381104,
    //                 "left_col": 0.2983192503452301,
    //                 "width": 0.45042380690574646,
    //                 "height": 0.34252142906188965
    //             },
    //             "image": "https://customerimg.s3.amazonaws.com/Thu May 11 2023 10:37:23 GMT+0000 (Coordinated Universal Time)-pants.jpg"
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "productInfo": [
    //             {
    //                 "size": {
    //                     "BOOL": true
    //                 },
    //                 "seller": {
    //                     "S": "Balenciaga"
    //                 },
    //                 "bucket_name": {
    //                     "S": "Political Campaign Sweatshirt Regular Fit in Black"
    //                 },
    //                 "price": {
    //                     "N": "1050"
    //                 },
    //                 "image_url": {
    //                     "S": "https://findcommercedemo.s3.us-east-2.amazonaws.com/Political+Campaign+Sweatshirt+Regular+Fit+in+Black/sample-top.png"
    //                 },
    //                 "id": {
    //                     "N": "1"
    //                 },
    //                 "name": {
    //                     "S": "Political Campaign Sweatshirt Regular Fit in Black"
    //                 },
    //                 "color": {
    //                     "S": ""
    //                 }
    //             }
    //         ],
    //         "itemInfo": {
    //             "name": "Political Campaign Sweatshirt Regular Fit in Black",
    //             "value": 0.20424659550189972,
    //             "position": {
    //                 "top_row": 0.28915759921073914,
    //                 "left_col": 0.24830053746700287,
    //                 "width": 0.4991799145936966,
    //                 "height": 0.4333416521549225
    //             },
    //             "image": "https://customerimg.s3.amazonaws.com/Thu May 11 2023 10:37:23 GMT+0000 (Coordinated Universal Time)-top.jpg"
    //         }
    //     }
    // ]

    return (
        <div className='pr-[15px] pt-[86px] font-neue'>
            <div className='flex'>
                <div className='bg-pattern bg-cover w-[20px]'>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex px-1 flex-col justify-center'>
                        <img className='w-[100vw]' src='https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/gtuwosplzheykjybv2r0/blxst-melbourne-australia?fimg-ssr-default' alt='' />
                        <figcaption className='pt-[15px] italic text-[10px] text-[#9b9b9b] text-left'>Image via Alimba Pausigere</figcaption>
                    </div>
                </div>
            </div>

            <div className='bg-pattern bg-cover w-[19px] h-[50px]'>
            </div>

            <div className='flex'>
                <div className='bg-pattern bg-cover w-[20px]'>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex px-1 flex-col justify-center'>
                        <img className='w-[100vw]' src='/images/main-2.png' alt='' />
                    </div>
                    <h1 className='pt-[80px] text-[48px] font-bold break-words w-[920px] leading-[1.04] border-b border-[#cecece] pb-[30px]'>Blxst is Taking L.A. With Him on His Way to the Top</h1>
                    <div className='flex gap-x-[570px] pt-[30px]'>
                        <div className='uppercase text-[12px]'>
                            <span className='mr-[3px]'>By</span>
                            <a className='text-[#327bbf] inline-block' href='/'>Rachael Evans</a>
                            <span>
                                &nbsp; for &nbsp;
                                <a className='text-[#327bbf] inline-block' href='/'>Complex Australia</a>
                            </span>
                        </div>
                        <time className='text-[12px]'>Nov 28, 2022</time>
                    </div>
                    <div className='py-[50px]'>
                        <ul className='flex gap-x-[20px]'>
                            <li className='bg-[#3b5998] rounded-md h-[40px] w-[60px] flex justify-center items-center'>
                                <a href='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10} height={20}>
                                        <title>Facebook logo</title>
                                        <path
                                            fill="#ffffff"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        >
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li className='bg-[#0084b4] rounded-md h-[40px] w-[60px] flex justify-center items-center'>
                                <a href='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}>
                                        <title>Facebook logo</title>
                                        <path
                                            fill="#ffffff"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        >
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li className='bg-[#000] rounded-md h-[40px] w-[60px] flex justify-center items-center'>
                                <a href='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 18" width={24} height={18}>
                                        <title>Facebook logo</title>
                                        <path
                                            fill="#ffffff"
                                            d="M18.839.177H3.397C1.57.179.09 1.659.087 3.486v11.028c.003 1.827 1.484 3.307 3.31 3.31h15.442c1.826-.003 3.306-1.483 3.308-3.31V3.486C22.145 1.659 20.665.179 18.84.176zM3.397 2.382h15.442c.4.004.765.228.952.581l-8.673 7.51-8.674-7.51c.187-.353.552-.577.953-.58zm15.442 13.236H3.397c-.608-.001-1.103-.495-1.103-1.104V5.751l8.824 7.64 8.823-7.64v8.763c0 .61-.494 1.103-1.102 1.104z"
                                        >
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li className='bg-[#9b9b9b] rounded-md h-[40px] w-[60px] flex justify-center items-center'>
                                <a href='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={50} height={34}>
                                        <title>Facebook logo</title>
                                        <path
                                            fill="#ffffff"
                                            d="M28.94,35.34l-4.43-4.43a3.15,3.15,0,0,1-.91-2.22,3.11,3.11,0,0,1,.91-2.21l.25-.25-1-1-.25.25a3.11,3.11,0,0,1-2.21.91,3.15,3.15,0,0,1-2.22-.91l-4.43-4.43a3.15,3.15,0,0,1,0-4.43l2-2a3.15,3.15,0,0,1,4.43,0l4.44,4.43a3.15,3.15,0,0,1,0,4.43l-.25.25,1,1,.25-.25a3.15,3.15,0,0,1,4.43,0l4.43,4.44a3.15,3.15,0,0,1,0,4.43l-2,2a3.15,3.15,0,0,1-4.43,0Zm-.25-8.12a1,1,0,0,1-1.47,1.47l-1-1L26,28a1,1,0,0,0-.31.73,1,1,0,0,0,.31.74l4.43,4.43a1,1,0,0,0,.73.3,1,1,0,0,0,.74-.3l2-2a1.05,1.05,0,0,0,.31-.74,1,1,0,0,0-.31-.73L29.43,26a1.06,1.06,0,0,0-.74-.3A1,1,0,0,0,28,26l-.25.25Zm-6.4-3.45-1-1a1,1,0,0,1,1.47-1.47l1,1L24,22a1,1,0,0,0,.3-.73,1.06,1.06,0,0,0-.3-.74l-4.44-4.43a1,1,0,0,0-.73-.31,1.07,1.07,0,0,0-.74.31l-2,2a1,1,0,0,0-.3.74,1,1,0,0,0,.3.73L20.57,24a1,1,0,0,0,.74.31A1,1,0,0,0,22,24Z"
                                        >
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bg-pattern bg-cover w-[19px] h-[50px]'>
            </div>

            <div className='flex'>
                <div className='bg-pattern bg-cover w-[19px]'>
                </div>
                <div className='w-[822px] mx-auto'>
                    <p className='font-times text-[16px] leading-[24px] tracking-[1px]'>Blxst doesn’t particularly enjoy interviews, he tells me. This isn’t because he’s arrogant or thinks he’s above them—he’s just shy. But it’s part of the job, so he does it anyway. “I struggle to elaborate, but I still put effort into it,” he says. We’re sitting in Red Bull’s Port Melbourne office, as their music division handles the distribution for Blxst’s label Evgle.​​​ Blxst is so quiet, initially, that I slide my phone a bit closer to make sure the mic picks his voice up, and I ask if he can speak a little louder. He shifts forward in his chair and lifts his voice. While his shyness remains a feature of our interview, as time elapses he becomes more comfortable.It’s been a colossal 18 months for the L.A. rapper, who’s gone from a city legend to a star who’s garnered international acclaim. Blxst has a longstanding history as a producer, but the buzz around him began to take root in 2019 following the release of his joint project Sixtape with fellow L.A. native Bino Rideaux. The juxtaposition of Rideaux’s coarse flows and Blxst’s velvety tones across the project injected a fresh sound into West Coast hip-hop and R&B that captured local and international attention.</p>
                </div>
            </div>

            <div className='flex z-[100]'>
                <div className='bg-pattern bg-cover w-[19px]'>
                </div>
                <div className='pt-[140px] flex flex-col justify-center items-center w-full'>
                    <div className='relative'>
                        <img src='https://images.complex.com/complex/images/c_crop,h_1446,w_1170,x_0,y_309/c_fill,dpr_auto,f_auto,q_auto,w_920/fl_lossy,pg_1/c9xdoxymexuijdmowutr/blxst-melbourne?fimg-client' alt='' />
                        <figcaption className='pt-[15px] pr-[800px] italic text-[10px] text-[#9b9b9b] text-left'>Image via Alimba Pausigere</figcaption>
                        {
                            productInfo.result ? (
                                productInfo.result.map((product, index) => (
                                    <div className='absolute' style={{ top: `${product.itemInfo.position.top_row * 100}%`, left: `${product.itemInfo.position.left_col * 100}%` }}>
                                        <button
                                            className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-lg'
                                            key={index}
                                            onClick={() => handleShoppingButton(product)}
                                        >
                                            <img src='/images/union.png' alt='' />
                                        </button>
                                    </div>
                                ))
                                ) : (
                                    <div className='absolute top-0 left-0'>
                                        Loading ...
                                    </div>
                            )
                        }
                        {
                            selectedModal && (
                                <div
                                    ref={shoppingModalRef}
                                    className='absolute pt-16'
                                    style={{ top: `${selectedModal.itemInfo.position.top_row * 100}%`, left: `${selectedModal.itemInfo.position.left_col * 100}%` }}
                                >
                                    <ShoppingModal selectedBodySize={selectedBodySize} setSelectedBodySize={setSelectedBodySize} selectedModal={selectedModal} setSelectedModal={setSelectedModal} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className='bg-pattern bg-cover w-[19px] h-[50px]'>
            </div>

            <div className='flex'>
                <div className='bg-pattern bg-cover w-[19px]'>
                </div>
                <div className='w-[822px] mx-auto'>
                    <p className='font-times text-[16px] leading-[24px] tracking-[1px]'>
                        It was in 2020, off the back of Sixtape, that Blxst’s co-owned record label Evgle partnered with Red Bull Records to release his debut EP, No Love Lost. In 2021 he followed up with his debut album, Before You Go. Blxst is in Australia to tour the album, after roughly a month off since a North American leg that saw him perform 32 shows in about six weeks. He seems like someone with a calm, steady demeanour, so I wonder how he coped with the acute, immense stress of doing a tour that often involved back-to-back shows in different states and in such a short period.
                        <br />
                        <br />
                        He tells me that life on the road hasn’t been without its challenges. But the challenges he speaks of aren’t to do with the physical and mental exhaustion that inevitably come along with a rigorous touring schedule. They’re to do with missing people—his family—while he’s away.
                        <br />
                        <br />
                        “I try not to think about [the stress of] it.” He pauses to find the right words before continuing: “You kinda have to mentally tap out of your personal life. Sometimes I have to ignore calls from my family while I’m on the road, because I know if I hear their voice, I’m gonna miss them, and it’s going to make it hard for me to focus on what I’m doing.”
                    </p>

                    <img className='w-[100vw] py-[30px]' src='/images/main-3.png' alt='' />

                    <p className='font-times text-[16px] leading-[24px] tracking-[1px]'>
                        It’s not uncommon for Blxst to stay in his hotel room in any given city while the rest of his team are out partying. The confines of his hotel room offer him a space to privately decompress as well as avoid the temptations that perennially surround him on tour. “I like being in different cities, but there’s a lot of temptations. As soon as you step out the room, you wanna get into so much, so I just stay in the room a lot of the time.” He doesn’t give names to these temptations, and I don’t press him on it. I’m left to infer.
                    </p>

                    <img className='w-full' src='/images/main-4.png' alt='' />

                    <p className='font-times text-[16px] py-[30px] leading-[24px] tracking-[1px]'>
                        In some ways, Blxst is one of hip-hop’s anomalies, most notably in that he doesn’t fit into any of the conceited, boastful archetypes exhibited by many of his peers. He tells me that being humble is something he values, and I’m curious as to why and where it comes from. He’s somewhat stumped by this question, which in turn catches me off-guard. He takes another pause but eventually credits his dad. “My dad is [humble], he’s non-confrontational, he’s chill, he just wants to see the best for everybody, he’s not selfish.”
                    </p>

                    <img className='w-[100vw]' src='/images/main-3.png' alt='' />
                </div>
            </div>

            {
                isModalStatus &&
                <div ref={modalRef} className='absolute top-[142px] right-[24px]'>
                    <Modal />
                </div>
            }
        </div>
    );
}

export default React.memo(Home);
