import React, { Component } from 'react'

class Cv extends Component {
    render() {
        return (
            <div className="cv-container">
                <div className="heading-container">
                    <div className="heading">
                        <h1>
                            {this.props.state.firstName + '' + this.props.state.lastName}
                        </h1>
                        <span>{this.props.state.jobTitle}</span>
                    </div>
                    <img src={this.props.state.imgUrl} alt="profile" />
                </div>
                <div className="main-container">
                    <div className="content-container container-1">
                        <div>
                        <h2 className="content-heading">Experience</h2>
                        </div>
                        <h2 className="content-heading">Education</h2>
                    </div>
                    <div className="content-container container-2">
                        <div>
                            <h2>Profile</h2>
                            <p></p>
                        </div>
                        <div>
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Cv