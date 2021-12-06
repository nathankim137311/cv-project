import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const stylingObject = {
            button: {
                backgroundColor: '#2ecc71',
                color: 'white',
            }
        } 
        return (
            <form id="form" onSubmit={this.props.handleSubmit}>
                <div className="form-control-container">
                    <h1>Contact</h1>
                    <div className="form-control">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" value={this.props.state.phone} onChange={this.props.handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={this.props.state.email} onChange={this.props.handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="website">Website</label>
                        <input type="text" id="website" name="website" value={this.props.state.website} placeholder="Optional" onChange={this.props.handleChange} />
                    </div>
                </div>
                <button style={stylingObject.button} className="submit-btn" onClick={this.props.nextForm}>Create</button>
            </form>
        )
    }; 
}

export default Contact