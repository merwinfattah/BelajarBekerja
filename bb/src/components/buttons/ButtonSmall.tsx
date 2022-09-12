import React from 'react';
import ButtonProps from '../../interfaces/ButtonProps';




const ButtonSmall: React.FC<ButtonProps> = ({width, text, color='bg-c1', radius=10, textColor='text-c2'}) => {
    return (
        <button className={`w-[${width}] h-8 ${color} rounded-[${radius}px] flex flex-row justify-center items-center py-7px px-6  ${textColor} font-poppins font-semibold gap-2.5 text-xs`}>
            {text}
        </button>
    )
}


export default ButtonSmall;