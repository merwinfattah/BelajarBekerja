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
        <footer className=' sticky top-[100vh] web:h-[352px] bg-c3 w-full font-poppins text-[#383838] smartphone:h-[600px] '>
            <div className=' container mx-auto web:flex web:flex-row smartphone: block  web:pt-[17px]  web:gap-[10px]  smartphone:p-[16px]'>
                <div className='flex flex-col web:gap-[32px] smartphone:gap-[15px] web:pt-[20px]'>
                    <img src={Logo} alt='logo' className=' web:w-[199.65px] web:h-[81px] smartphone:w-[141px] smartphone:h-[56px]'/>
                    <p className=' text-[10px] web:w-[297px] web:h-[98px] smartphone:w-[328px] smartphone:h-[90px]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quam beatae vero autem animi accusantium nobis, 
                    similique corrupti suscipit impedit doloremque natus labore, 
                    maiores atque? Ea officia quia nostrum totam impedit quod mollitia hic ad molestiae? Suscipit, 
                    assumenda. Nostrum, nobis molestias.
                    </p>
                </div> 
                <div className='flex web:flex-row  smartphone:flex-wrap web:justify-center web:gap-[69px] smartphone:gap-y-[16px] smartphone:gap-x-[65px] smartphone:w-[300px] web:w-[1000px]  '>
                    <div className='flex flex-col  gap-[8px] web:text-base smartphone:text-xs'>
                        <h3 className=' web:text-xl smartphone:text-sm font-semibold web:mb-[16px] '>Info</h3>
                        <a href='#aboutUs'>About Us</a>
                        <a href='#aboutUs'>Contact Us</a>
                        <a href='#aboutUs'>Become a Mentor</a>
                        <a href='#aboutUs'>Career</a>
                        <a href='#aboutUs'>FAQ</a>
                        <a href='#aboutUs'>Privacy Policy</a>
                    </div>
                    <div className='flex flex-col  gap-[8px] web:text-base smartphone:text-xs'>
                        <h3 className=' web:text-xl smartphone:text-sm  font-semibold web:mb-[16px] '>Yuk Belajar</h3>
                        <a href='#aboutUs'>Design & UI/UX</a>
                        <a href='#aboutUs'>Digital Marketing</a>
                        <a href='#aboutUs'>Programming</a>
                        <a href='#aboutUs'>Data Analytics</a>
                        <a href='#aboutUs'>Human Resources</a>
                    </div>
                    <div className='flex flex-col  gap-2 '>
                        <h3 className=' web:text-xl smartphone:text-sm  font-semibold web:mb-[16px] '>Payment Method</h3>
                        <div className=' flex flex-wrap gap-[24px] web:w-[382.53px] smartphone:w-[298.71px]'>
                            <img src={BRI} alt='BRI' className=' web:w-[134.33px] web:h-[32px] smartphone:w-[100.74px] smartphone:h-[24px]'/>
                            <img src={BNI} alt='BNI' className=' web:w-[97.88px] web:h-[32px] smartphone:w-[73.41px] smartphone:h-[24px]'/>
                            <img src={Mandiri} alt='Mandiri' className=' web:w-[102.08px] web:h-[32px] smartphone:w-[76.56px] smartphone:h-[24px]'/>
                            <img src={Dana} alt='Dana' className=' web:w-[112.28px] web:h-[32px] smartphone:w-[84.21px] smartphone:h-[24px]'/>
                            <img src={Gopay} alt='Gopay' className=' webw-[85.45px] web:h-[32px] smartphone:w-[64.09px] smartphone:h-[24px]'/>
                        </div>
                        <div className=' web:mt-[24px] smartphone:text-smartphone'>Follow Us</div>
                        <div className=' flex gap-[23.19px] text-[#EE6D2D] text-xl'>
                            <IoLogoTwitter />
                            <AiFillInstagram/>
                            <AiFillLinkedin />
                            <AiFillFacebook />
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' bg-[#383838] h-[2px] web:mt-6 smartphone:mt-1  web:block '></hr>
            <div className=' web:text-center  web:pt-[26px]  web:text-xs smartphone:text-[10px] smartphone:p-[16px]'>Copyright @ 2022.BelajarBekerja Kawan Kerja.All Rights Reserved</div>
        </footer>
    )

}

export default Footer;