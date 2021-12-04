import { Component } from 'react'

class Experience extends Component {
    render() {
        return (
            <form id="form">
                <div className="form-control-container">
                    <h1>Work Experience</h1>
                    <div className="form-control">
                        <label htmlFor="position">Job position</label>
                        <input type="text" id="position" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="company-name">Company</label>
                        <input type="text" id="company-name" />
                    </div>
                    <div className="form-control date">
                        <label htmlFor="start-date">Start</label>
                        <input type="date" id="start-date" />
                        <label htmlFor="end-date">End</label>
                        <input type="date" id="end-date" />
                    </div>
                </div>
                <button className="submit-btn" type="submit">Next</button>
            </form>
        ) 
    }
}

export default Experience