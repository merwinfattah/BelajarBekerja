import React from 'react'
import StatusProps from '../../interfaces/StatusProps';

const StatusStyling = (type: string) => {
    if (type === 'Berhasil')
        return '#27AE60';
    else if (type === 'Tertunda')
        return '#F2994A';
    else return '#EB5757';
}




const StatusBox: React.FC<StatusProps> = ({description}) => {
    let color = StatusStyling(description);
    return (
        <div className={`w-96 h-8 bg-[${color}] py-0.5 px-[18px] text-c2 rounded-[20px] text-[16px] text-center`}>{description}</div>
    )
}

export default StatusBox;