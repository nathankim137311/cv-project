import { Component } from 'react'

class Profile extends Component {
    onTrigger(e) {
        const parent = this;
        parent.props.parentCallback(parent, e);
        e.preventDefault();
    }

    render() {
        return (
            <div className="form-control-container">
                <h1>Profile info</h1>
                <div className="form-control">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name='firstName' 
                    onChange={(e) => this.onTrigger(e)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="lastName" 
                    onChange={(e) => this.onTrigger(e)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="first-name">Job Title</label>
                    <input type="text" id="job-title" name="jobTitle" 
                    onChange={(e) => this.onTrigger(e)}
                    />
                </div>
                <div className="form-control description">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" 
                    onChange={(e) => this.onTrigger(e)}
                    >
                    </textarea>
                </div>
                <div className="form-control image">
                    <label htmlFor="profile-img">Profile Image</label>
                    <input type="file" id="profile-img" name="profileImg" accept=".jpg, .jpeg, .png"
                    
                    />
                </div>
            </div>
        ) 
    }
}

export default Profile