import React, { Component } from 'react'

class Cv extends Component {
    render() {
        return (
            <div className="cv-container">
                <div className="heading-container">
                    <div className="heading">
                        <h1>
                            {`${this.props.state.firstName.toUpperCase()} ${this.props.state.lastName.toUpperCase()}`}
                        </h1>
                        <span>{this.props.state.jobTitle}</span>
                    </div>
                    <img src={this.props.state.imgUrl} alt="profile" />
                </div>
                <div className="main-container">
                    <div className="content-container container-1">
                        <div className="experience-container" >
                            <ul className="content-list experience">
                            <h2 className="content-heading">Experience</h2>
                                <li>
                                    <div>
                                    <span>{this.props.state.jobPosition}</span>
                                    <span>{this.props.state.companyName}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="education-container">
                            <h2 className="content-heading">Education</h2>
                            <ul className="content-list education">
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-container container-2">
                        <div>
                            <h2>Profile</h2>
                            <ul className="content-list profile">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Contact</h2>
                            <ul className="content-list contact">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Cv