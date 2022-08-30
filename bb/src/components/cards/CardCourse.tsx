import React from 'react';
import CardCourseProps from '../../interfaces/CardCourseProps';
import Work from '../../assets/work.jpg';

const CardCourse: React.FC<CardCourseProps> = ({category, name, mentor, isStarted, progress}) => {
    return( 
        <div className={`container  my-20 w-[297px] shadow-md font-poppins  rounded-[10px] overflow-hidden ${isStarted? 'h-[352px]': 'h-[308px]'}`}>
            <div className=' bg-cover w-[297px] h-[156px] ' style={{backgroundImage: `url(${Work})`}}>
                <div className=' bg-c7 text-center text-c2 text-[10px] w-[96px] h-[32px] rounded-[25px] px-[10px] pt-[8px] pb-[9px] relative left-44 top-5'>{category}</div>
            </div>
            <div className= ' px-[24px] pt-[16px] pb-[16px]'>
                <h3 className=' font-bold text-[16px]'>{name}</h3>
                <small>{mentor}</small>
                <div className={`${isStarted? 'visible': 'hidden'} mt-[10px]`}>
                    <small className=' font-bold'>Progress Belajar</small>
                    <div className=" w-[249px] h-[2px] bg-[#D9D9D9] my-[8px]">
                        <div className={`bg-[#27AE60] h-[2px] w-[${progress+"%"}]`}></div>
                        <small>{progress}%</small>
                    </div>
                </div>
                <button className={`bg-c1 w-[249px] h-[32px] rounded-[10px] text-c2 mt-[30px] `}>{isStarted? 'Lanjutkan':'Mulai'}</button>
            </div>
            
        </div>
    )
}


export default CardCourse;