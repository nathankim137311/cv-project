import React, {useState} from 'react'

export default function Profile() {
    const [profile, setProfile] = useState({ 
        name: 'Norman', 
        surname: 'Osbourne', 
        jobTitle: 'CEO',
        phone: '212-868-7000',
        email: 'goblin@oscorp.com',
        website: 'www.oscorp.org',
        imgUrl: '',
    });

    function handleProfileChange (e) {
        const newProfile = { ...profile, [e.target.name]: e.target.value }
        setProfile(() => ({ newProfile }));
    }

    return (
        <>
            <div className="img-container">
                <img src={profile.imgUrl} alt="profile" />
                <input 
                type="file" 
                id="img"
                name="img"
                value={profile.imgUrl}
                onChange={handleProfileChange}
                />
            </div>
            <div className="heading-container">
                <h1>
                <input 
                type="text" 
                id="name" 
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                />
                </h1>
                <input 
                type="text" 
                id="surname" 
                name="surname"
                value={profile.surname}
                onChange={handleProfileChange}
                />
                <input 
                type="text" 
                id="job-title"
                name="jobTitle"
                value={profile.jobTitle}
                onChange={handleProfileChange}
                />
            </div>
            <div className="contact-container">
                <h1>CV</h1>
                <ul className="contact-list">
                    <li>
                        <input 
                        type="text" 
                        id="phone" 
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        />
                    </li>
                    <li>
                        <input 
                        type="text" 
                        id="email" 
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        />
                    </li>
                    <li>
                        <input 
                        type="text" 
                        id="website" 
                        name="website"
                        value={profile.website}
                        onChange={handleProfileChange}
                        />
                    </li>
                </ul> 
            </div>
        </>
    );
}