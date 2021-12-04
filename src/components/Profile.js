import { Component } from 'react'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
          firstName: '',
          lastName: '',
          jobTitle: '',
          description: '', 
          imgUrl: '', 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit button clicked!'); 
    }
    
    render() {
        return (
            <form id="form" onSubmit={this.handleSubmit}>
                <div className="form-control-container">
                    <h1>Profile Info</h1>
                    <div className="form-control">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name='firstName' 
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-control">
                    <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" 
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="first-name">Job Title</label>
                        <input type="text" id="job-title" name="jobTitle" 
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-control description">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" 
                        onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="form-control image">
                        <label htmlFor="profile-img">Profile Image</label>
                        <input type="file" id="profile-img" name="imgUrl" accept="image/*"
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button className="submit-btn" type="submit">Next</button>
            </form>
        ) 
    }
}

export default Profile