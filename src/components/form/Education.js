import { Component } from 'react'

class Education extends Component { 
    render() {
        return (
            <form id="form">
                <div className="form-control-container">
                    <h1>Education</h1>
                    <div className="form-control">
                        <label htmlFor="university">University</label>
                        <input type="text" id="university" name="university" value={this.props.state.university} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" value={this.props.state.city} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" name="degree" value={this.props.state.degree} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-control date">
                        <label htmlFor="start-date">Start</label>
                        <input type="date" id="start-date" name="startDate" value={this.props.state.universityStartDate}  
                        onChange={this.props.handleChange}
                        />
                        <label htmlFor="end-date">End</label>
                        <input type="date" id="end-date" name="endDate" value={this.props.state.universityEndDate} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <button className="submit-btn" onClick={this.props.nextForm}>Next</button>
            </form>
        ) 
    }
}

export default Education