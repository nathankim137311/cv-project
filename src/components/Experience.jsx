import React, { useState } from 'react'

export default function Experience() {
    const [workExperience, setWorkExperience] = useState({
        company: 'Oscorp',
        companyTitle: 'CEO',
        companyDuties: 'Ran Oscorp with my son Harry, a guy named Peter tried interning at our company... and that\'s where I\'m leaving that',
        companyStart: '2001', 
        companyEnd: '2003'
    });

    function handleExperienceChange (e) {
        const newExperience = { ...workExperience, [e.target.name]: e.target.value }
        setWorkExperience(() => ({ newExperience }));
    }

    return (
        <>
            <input 
            type="text" 
            id="company"
            name="company"
            value={workExperience.company}
            onChange={handleExperienceChange}
            />
            <input 
            type="text"
            id="company-title"
            name="companyTitle"
            value={workExperience.companyTitle}
            onChange={handleExperienceChange} 
            />
            <textarea 
            id="company-duties"
            name="companyDuties"
            value={workExperience.companyDuties}
            onChange={handleExperienceChange} 
            />
            <input 
            type="text"
            id="company-start"
            name="companyStart"
            value={workExperience.companyStart}
            onChange={handleExperienceChange} 
            />
            <input 
            type="text"
            id="company-end"
            name="companyEnd"
            value={workExperience.companyEnd}
            onChange={handleExperienceChange} 
            />
        </>
    );
}