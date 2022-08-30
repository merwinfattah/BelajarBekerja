import React from 'react';
import ButtonProps from './../../interfaces/ButtonProps';



const ButtonMedium: React.FC<ButtonProps>= ({width, text, color='bg-c1', radius=10, textColor='text-c2'}) => {
    return (
        <button className={` w-[${width}px] h-10 ${color} rounded-[${radius}px] flex flex-row justify-center items-center pt-2.5 px-6 pb-9px ${textColor} font-poppins font-semibold gap-2.5 text-sm`}>
            {text}
        </button>
    )
}


export default ButtonMedium;