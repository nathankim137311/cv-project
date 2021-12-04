import { Component } from 'react'

class Education extends Component { 
    constructor() {
        super()
        this.state = {
          university: '',
          city: '',
          degree: '',
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
        const stylingObject = {
            button: {
                backgroundColor: '#2ecc71',
                color: 'white',
            }
        } 
        return (
            <form id="form">
                <div className="form-control-container">
                    <h1>Education</h1>
                    <div className="form-control">
                        <label htmlFor="university">University</label>
                        <input type="text" id="university" name="university" 
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" name="degree"
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
                <button style={stylingObject.button} className="submit-btn" type="submit">Create</button>
            </form>
        ) 
    }
}

export default Education