import React from 'react';
import InputBoxProps from '../../interfaces/InputBoxProps';


const InputBox: React.FC<InputBoxProps> = ({borderColor='border-c5', placeholder, textColor, width, type='text', id}) => {
    return (
            <input placeholder={placeholder} className={` box-border ${width} h-12 bg-c2 rounded-[10px] border-2 ${borderColor} ${textColor} border-solid py-3 px-5 outline-none`} type={type} id={id}/>
    )
}

export default InputBox;