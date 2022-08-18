import React from 'react';
import {FiSearch} from 'react-icons/fi';

const SearchBar: React.FC = () => {
    return(
        <div className=' flex gap-[8px]'>
            <div className='py-[12px] px-[20px] w-[1096px] h-[48px]  border-c5 border-solid border-2 rounded-[10px] flex items-center gap-[8px]'>
                <FiSearch />
                <input placeholder='Cari Kelas atau Mentor..' className=' outline-none overflow-visible w-[95%]' />
            </div>
            <button className=' bg-c1 w-[112px] h-[48px] rounded-[10px] text-c2 px-[24px] pt-[10px] pb-[9px]'>Cari</button>
        </div>
    )
}

export default SearchBar;