import React, { useState } from 'react'

export default function Education() {
    const [education, setEducation] = useState({
        university: 'Empire State University',
        city: 'New York',
        degree: 'Chemistry',
        universityDuties: 'studied chemistry and electrical engineering, took a number of courses in business administration',
        universityStartDate: '1985',
        universityEndDate: '1989',
    });

    function handleEducationChange (e) {
        const newEducation = { ...education, [e.target.name]: e.target.value }
        setEducation(() => ({ newEducation }));
    }

    return (
        <div className="content-container education-container">
            <div>
                <input 
                type="text" 
                id="university"
                name="university"
                value={education.university}
                onChange={handleEducationChange}
                />
                <input 
                type="text" 
                id="city"
                name="city"
                value={education.city}
                onChange={handleEducationChange}
                />
                <input 
                type="text" 
                id="degree"
                name="degree"
                value={education.degree}
                onChange={handleEducationChange}
                />
            </div>
            <div>
                <input 
                type="text" 
                id="university-start-date"
                name="universityStartDate"
                value={education.universityStartDate}
                onChange={handleEducationChange}
                />
                <input 
                type="text" 
                id="university-end-date"
                name="universityEndDate"
                value={education.universityEndDate}
                onChange={handleEducationChange}
                />
            </div>
            <textarea  
            id="universityDuties"
            name="universityDuties"
            value={education.universityDuties}
            onChange={handleEducationChange}
            />
        </div>
    );
}