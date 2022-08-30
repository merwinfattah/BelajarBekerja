import React from 'react';
import ButtonProps from './../../interfaces/ButtonProps';



const ButtonLarge: React.FC<ButtonProps> = ({width, text, color='bg-c1', radius=10, textColor='text-c2'}) => {
    return (
        <button className={` w-[${width}px] h-14 ${color} rounded-[${radius}px]   py-4 px-6 ${textColor} font-poppins font-semibold`}>
            {text}
        </button>
    )
}


export default ButtonLarge;