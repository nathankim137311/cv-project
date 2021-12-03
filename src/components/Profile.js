import { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div className="form-control-container">
                <h1>Profile info</h1>
                <div className="form-control">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />
                </div>
                <div className="form-control">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />
                </div>
                <div className="form-control">
                    <label htmlFor="first-name">Job Title</label>
                    <input type="text" id="job-title" />
                </div>
                <div className="form-control description">
                    <label htmlFor="description">Description</label>
                    <textarea id="description"></textarea>
                </div>
            </div>
        ) 
    }
}

export default Profile