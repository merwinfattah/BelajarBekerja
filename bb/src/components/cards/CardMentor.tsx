import React from 'react';
import MentorProps from '../../interfaces/MentorProps';

const CardMentor: React.FC<MentorProps> = ({name, role, workplace, title, price}) => {
    return (
        <div className=' w-[297px] h-[354px] rounded-[10px] overflow-hidden font-poppins'>
            <div className=' bg-c5 h-[160px] p-[10px]'>
                <div className=' rounded-[5px] bg-c2 w-[68px] h-[28px] text-center text-xs py-[5px] px-[14px] text-[#383838]'>Kursus</div>
            </div>
            <div className='bg-c1 text-c2 p-[16px]'>
                <div className='text-[20px] font-semibold'>{title}</div>
                <div className=' w-[265px] h-[2px] bg-c5 my-[5px]' />
                <div className='text-base '>{name}</div>
                <div className='text-xs mt-[5px]'>{role} at {workplace}</div>
                <div className='font-semibold mt-[50px] '>{price}</div>
            </div>
        </div>
    )

}

export default CardMentor;