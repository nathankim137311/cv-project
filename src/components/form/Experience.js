import { Component } from 'react'

class Experience extends Component {
    render() {
        return (
            <form id="form">
                <div className="form-control-container">
                    <h1>Work Experience</h1>
                    <div className="form-control">
                        <label htmlFor="jobPosition">Job position</label>
                        <input type="text" id="jobPosition" name="jobPosition" value={this.props.state.jobPosition} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="company-name">Company</label>
                        <input type="text" id="company-name" name="companyName" value={this.props.state.companyName}
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control description">
                        <label htmlFor="company-duties">Duties</label>
                        <textarea id="company-duties" name="companyDuties" value={this.props.state.companyDuties} 
                        onChange={this.props.handleChange}></textarea>
                    </div>
                    <div className="form-control date">
                        <label htmlFor="start-date">Start</label>
                        <input type="date" id="start-date" name="companyStartDate" value={this.props.state.companyStartDate}  
                        onChange={this.props.handleChange}
                        />
                        <label htmlFor="end-date">End</label>
                        <input type="date" id="end-date" name="companyEndDate" value={this.props.state.companyEndDate}
                        onChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <button className="submit-btn" onClick={this.props.nextForm}>Next</button>
            </form>
        ) 
    }
}

export default Experience