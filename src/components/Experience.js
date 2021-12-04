import { Component } from 'react'

class Experience extends Component {
    constructor() {
        super()
        this.state = {
          jobPosition: '',
          companyName: '',
          startDate: '',
          endDate: '', 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    render() {
        return (
            <form id="form">
                <div className="form-control-container">
                    <h1>Work Experience</h1>
                    <div className="form-control">
                        <label htmlFor="job-position">Job position</label>
                        <input type="text" id="job-position" name="jobPosition" 
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="company-name">Company</label>
                        <input type="text" id="company-name" name="companyName"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-control date">
                        <label htmlFor="start-date">Start</label>
                        <input type="date" id="start-date" name="startDate"  
                        onChange={this.handleChange}
                        />
                        <label htmlFor="end-date">End</label>
                        <input type="date" id="end-date" name="endDate" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button className="submit-btn" type="submit">Next</button>
            </form>
        ) 
    }
}

export default Experience