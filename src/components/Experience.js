import { Component } from 'react'

class Experience extends Component {
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
                        <input type="date" id="start-date" name="companyStartDate"  
                        onChange={this.handleChange}
                        />
                        <label htmlFor="end-date">End</label>
                        <input type="date" id="end-date" name="companyEndDate" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button className="submit-btn" onClick={this.props.nextForm}>Next</button>
            </form>
        ) 
    }
}

export default Experience