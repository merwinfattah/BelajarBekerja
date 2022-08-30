import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotificationsNone, MdOutlineShoppingCart} from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';
import Logo from '../../assets/Logo.svg';
import NavbarProps from '../../interfaces/NavbarProps';


const Navbar: React.FC<NavbarProps> = ({isLogin}) => {

    return(
        <nav className='w-full h-[88px] font-poppins  bg-c2 drop-shadow-md'>
            <div className= 'container mx-auto px-5 flex items-center gap-56 '>
                <div className='flex gap-16 items-center'>
                    <div className=' w-[137.51px] h-[56px]'>
                        {/* logo BB */}
                        <img src={Logo} alt='logo'/>
                    </div>
                    <div className='flex gap-12 pt-[36px] pb-[31px] text-[14px] text-[#606165]'>
                        <div className=' group'>
                            <a href='#dashboard'>Dashboard</a>
                            <div className=' group-hover:visible invisible bg-c1 h-[2px] mt-1'></div>
                        </div>
                        <div className=' group'>
                            <div className='flex items-center gap-3'>
                                <a href='#kursus'>Kursus</a>
                                <TiArrowSortedDown />
                            </div>
                            <div className=' group-hover:visible invisible bg-c1 h-[2px] mt-1'></div>
                        </div>
                        <div className=' group'>
                            <a href='#mentor'>Mentor</a>
                            <div className=' group-hover:visible invisible bg-c1 h-[2px] mt-1'></div>
                        </div>
                        <div className=' group'>
                            <a href='#webinar'>Webinar</a>
                            <div className=' group-hover:visible invisible bg-c1 h-[2px] mt-1'></div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-20 text-[#4F4F4F] items-center'>
                    <div className='flex gap-10 items-center'>
                        <button className=' w-[32px] h-[32px] rounded-[8px] hover:bg-[#E0E0E0] py-[4.33px] px-[4.33px]'>
                            <AiOutlineSearch className=' w-[23.34px] h-[23.33px] ' />
                        </button>
                        <button className=' w-[32px] h-[32px] rounded-[8px] hover:bg-[#E0E0E0] py-[4.33px] px-[4.33px]'>
                            <MdNotificationsNone className=' w-[23.34px] h-[23.33px] hover:cursor-pointer' />
                            <div className=' bg-[#EE6D2D] rounded-full w-[9px] h-[9px] relative -top-5 -right-3  text-c2 text-[8px] text-center py-0.5' ></div>
                        </button>
                        <button className=' w-[32px] h-[32px] rounded-[8px] hover:bg-[#E0E0E0] py-[4.33px] px-[4.33px]'>
                            <MdOutlineShoppingCart className=' w-[23.34px] h-[23.33px] hover:cursor-pointer' />
                            <div className=' bg-[#EE6D2D] rounded-full w-[16px] h-[16px] relative -top-7 -right-3  text-c2 text-[8px] text-center py-0.5' >8</div>
                        </button>
                        <div className={`${isLogin? 'hidden': 'flex'} items-center gap-8`}>
                            <a href='#masuk' className=' text-sm text-c1 font-semibold'>
                                Masuk
                            </a>
                            <button className='bg-c1 w-[93px] h-[40px] rounded-[100px] pt-[10px] px-[24px] pb-[9px] text-c2 text-sm font-semibold'>
                                Daftar
                            </button>
                        </div>
                    </div>
                    <div className={`${isLogin? 'flex': 'hidden'} items-center gap-3`}>
                        <div  className=' bg-c5 w-[36px] h-[36px] rounded-full border-2 border-[#D8D8D8]'/>
                        <p>Muhammad Fadli</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;