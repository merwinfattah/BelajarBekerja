import React from 'react';

import CourseCategory from '../../interfaces/CourseCategory';


const tagStyling = (type: string) => {
    if (type === 'Design & UI/UX')
        return {color: 'c7', width: '96px'};
    else if (type === 'Data Analytics')
        return {color: 'c8', width: '94px'};
    else if (type === 'Programming')
        return {color: 'c9', width: '91px'};
    else if (type === 'Digital Marketing')
        return {color: 'c10', width: '106px'};
    else return {color: 'c11', width: '107px'};
}

const CourseTag: React.FC<CourseCategory> = ({courseName}) => {
    let tagStyle = tagStyling(courseName);
    return (
        <div className={`w-[${tagStyle.width}] h-8 pt-2 px-2.5 pb-9px text-[10px] text-center text-c2 rounded-[25px] bg-${tagStyle.color}`}>
            {courseName}
        </div>
        
    )
}

export default CourseTag;