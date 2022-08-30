import React from 'react';
import CardLiveProps from '../../interfaces/CardLiveProps';
import ChessPattern from '../../assets/CheckerBoardSeemlessPattern.jpg'

const CardLive: React.FC<CardLiveProps> = ({ mentor, role, workplace, category, date, time, isLive }) => {
    return (
        <div className='bg-cover bg-no-repeat bg-center  w-[297px] h-[272px] rounded-[20px] overflow-hidden' style={{backgroundImage: `url(${ChessPattern})`}}>
            <div className=' bg-gradient-to-tr from-[#218FED]  w-[297px] h-[272px]  px-[20px] pt-[20px] pb-[8px]'>
                <div className={`flex items-center px-2 gap-[8px] w-[67px] h-[40px] bg-[#383838] rounded-[5px] ${isLive? 'visible' : 'invisible'} relative left-48`}>
                    <div className=' w-[12px] h-[12px] rounded-full bg-[#EB5757]'></div>
                    <p className=' text-c2'>Live</p>
                </div>
                <div className='flex flex-col relative top-20 text-c2 gap-1'>
                    <p className=' text-xl font-bold'>Lorem Ipsum</p>
                    <p>{mentor}</p>
                    <p className=' text-xs'>{role} at {workplace}</p>
                    <p className=' text-xs'>{category}</p>
                    <p className=' text-xs'>{date} | {time} WIB</p>
                </div>
            </div>
        </div>

    )
}

export default CardLive;