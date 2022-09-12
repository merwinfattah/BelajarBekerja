import React from 'react';
import Footer from '../components/footer/Footer';
import Logo from '../assets/Logo2.svg';
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from 'react-icons/io5';


const SignInLayout = ({children}: any) => {
    return (
        <React.Fragment>
            <div className='flex'>
                <aside className='w-[392px] h-auto bg-gradient-to-b from-[#305C8F] to-[#218FED] px-[53px] pt-[117px] pb-[57px]'>
                    <svg fill='#FFFFFF' className=' pl-10'>
                        <image xlinkHref={Logo} width="203px" height="84px"></image>
                    </svg>
                    <section className=' mt-[227px]'>
                        <p className=' font-semibold w-[286px] text-c2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Id donec nunc tortor bibendum odio cras eget. 
                        </p>
                        <p className='font-[400] text-xs text-c2 mt-[16px]'>
                           Mas Fadli <br />
                           Pixel Lover <br />
                           Software Agency
                        </p>
                        <div className=' flex gap-[24px] mt-[40px] text-5xl text-c2'>
                            <IoArrowBackCircleOutline className=' hover: cursor-pointer'/>
                            <IoArrowForwardCircleOutline className=' hover: cursor-pointer' />
                        </div>
                    </section>
                    <p className=' text-xs text-c2 font-[400]  text-center mt-[238px]'>
                    belajarbekerja@adminbb.com
                    </p>
                </aside>
                <main className=' web:px-[80px]'>
                    {children}    
                </main>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default SignInLayout;