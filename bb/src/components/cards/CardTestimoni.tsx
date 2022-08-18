import React from 'react';
import TestimoniProps from '../../interfaces/TestimoniProps';

const CardTestimoni: React.FC<TestimoniProps> = ({ name, role, workplace, description}) => {
    return (
        <div className=' container w-297 h-303 bg-c3 rounded-[10px] box-border absolute border-1 border-c4 border-solid p-5 '>
            <div className='flex gap-3'>
                <div className=' w-78 h-85 bg-c5 rounded-[20px]'></div>
                <div>
                    <h5 className=' font-bold text-sm text-c6'>{name}</h5>
                    <p className=' text-xs my-2 text-c6'>{role}</p>
                    <p className=' text-xs text-c6 '>at {workplace}</p>
                </div>
            </div>
            <div className=' w-111 h-3.03 bg-c5 mt-5 mb-2'></div>
            <div className=' w-60 h-36 overflow-hidden'>
                <p className=' text-xs text-c6'>
                    {description}
                </p>
            </div>
        </div>
    )
}


export default CardTestimoni;