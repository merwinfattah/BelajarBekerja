import React from 'react';
import InputBoxProps from '../../interfaces/InputBoxProps';


const InputBox: React.FC<InputBoxProps> = ({borderColor='border-c6', placeholder, textColor}) => {
    return (
            <input placeholder={placeholder} className={` box-border w-400 h-12 bg-c2 rounded-[10px] border-2 ${borderColor} ${textColor} border-solid py-3 px-5 outline-none`}/>
    )
}

export default InputBox;