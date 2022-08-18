import * as React from 'react';
import Logo from '../../assets/Logo.svg';
import BNI from '../../assets/BNI.png';
import BRI from '../../assets/BRI.png';
import Mandiri from '../../assets/Mandiri.png';
import Dana from '../../assets/Dana.png';
import Gopay from '../../assets/Gopay.png';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';


const Footer: React.FC = () => {
    return (
        <footer className=' fixed bottom-0 h-[352px] bg-c3 w-screen font-poppins text-[#383838]  '>
            <div className='flex flex-row  pt-[17px] gap-[136px]  justify-center'>
                <div className='flex flex-col gap-[32px] pt-[20px]'>
                    <img src={Logo} alt='logo' className=' w-[199.65px] h-[81px]'/>
                    <p className=' text-[10px] w-[297px] h-[98px]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quam beatae vero autem animi accusantium nobis, 
                    similique corrupti suscipit impedit doloremque natus labore, 
                    maiores atque? Ea officia quia nostrum totam impedit quod mollitia hic ad molestiae? Suscipit, 
                    assumenda. Nostrum, nobis molestias.
                    </p>
                </div> 
                <div className='flex flex-row justify-center gap-[69px] '>
                    <div className='flex flex-col  gap-[8px]'>
                        <h3 className=' text-2xl font-semibold mb-3'>Info</h3>
                        <a href='#aboutUs'>About Us</a>
                        <a href='#aboutUs'>Contact Us</a>
                        <a href='#aboutUs'>Become a Mentor</a>
                        <a href='#aboutUs'>Career</a>
                        <a href='#aboutUs'>FAQ</a>
                        <a href='#aboutUs'>Privacy Policy</a>
                    </div>
                    <div className='flex flex-col  gap-[8px]'>
                        <h3 className=' text-2xl font-semibold mb-3'>Yuk Belajar</h3>
                        <a href='#aboutUs'>Design & UI/UX</a>
                        <a href='#aboutUs'>Digital Marketing</a>
                        <a href='#aboutUs'>Programming</a>
                        <a href='#aboutUs'>Data Analytics</a>
                        <a href='#aboutUs'>Human Resources</a>
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <h3 className=' text-2xl font-semibold mb-3'>Payment Method</h3>
                        <div className=' flex flex-wrap gap-[24px] w-[382.53px]'>
                            <img src={BRI} alt='BRI' className=' w-[134.33px] h-[32px]'/>
                            <img src={BNI} alt='BNI' className=' w-[97.88px] h-[32px]'/>
                            <img src={Mandiri} alt='Mandiri' className=' w-[102.08px] h-[32px]'/>
                            <img src={Dana} alt='Dana' className=' w-[112.28px] h-[32px]'/>
                            <img src={Gopay} alt='Gopay' className=' w-[85.45px] h-[32px]'/>
                        </div>
                        <div className=' mt-[24px]'>Follow Us</div>
                        <div className=' flex gap-[23.19px] text-[#EE6D2D] text-xl'>
                            <IoLogoTwitter />
                            <AiFillInstagram/>
                            <AiFillLinkedin />
                            <AiFillFacebook />
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' bg-[#383838] h-[2px] mt-6'></hr>
            <div className=' text-center pb-[30px] pt-[26px] text-xs'>Copyright @ 2022.BelajarBekerja Kawan Kerja.All Rights Reserved</div>
        </footer>
    )

}

export default Footer;