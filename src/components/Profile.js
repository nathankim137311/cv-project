import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <form id="form" onSubmit={this.props.handleSubmit}>
                <div className="form-control-container">
                    <h1>Profile Info</h1>
                    <div className="form-control">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name='firstName' 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control">
                    <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="first-name">Job Title</label>
                        <input type="text" id="job-title" name="jobTitle" 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control description">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" 
                        onChange={this.props.handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="form-control image">
                        <label htmlFor="profile-img">Profile Image</label>
                        <input type="file" id="profile-img" name="imgUrl" accept="image/*"
                        onChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <button className="submit-btn" type="submit" onClick={this.props.nextForm} >Next</button>
            </form>
        ) 
    }
}

export default Profile