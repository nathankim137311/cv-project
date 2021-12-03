import { Component } from 'react'

class Education extends Component {
    render() {
        return (
            <div className="form-control-container">
                <h1>Education</h1>
                <div className="form-control">
                    <label htmlFor="university">University</label>
                    <input type="text" id="university" />
                </div>
                <div className="form-control">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city"/>
                </div>
                <div className="form-control">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree"/>
                </div>
                <div className="form-control date">
                    <label htmlFor="start-date">Start date</label>
                    <input type="date" id="start-date" />
                    <label htmlFor="end-date">End date</label>
                    <input type="date" id="end-date" />
                </div>
            </div>
        ) 
    }
}

export default Education