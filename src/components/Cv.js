import React, { Component } from 'react'

class Cv extends Component {
    constructor() {
        super()
        this.state = {
            showOverlay: false,
        }
    }

    showEditOverlay = () => {
        this.setState({
            showOverlay: true,
        });
    }

    removeEditOverlay = () => {
        this.setState({
            showOverlay: false, 
        });
    }

    render() {
        return (
            <>
            {this.state.showOverlay && <button id="edit-btn" onMouseEnter={this.showEditOverlay} onClick={this.props.editForm}>Edit</button>}
            <div className={"cv-container " + (this.state.showOverlay ? "overlay" : "")} onMouseEnter={this.showEditOverlay} onMouseLeave={this.removeEditOverlay}>
                {/* Cv page  */}
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
                                    <span>{`${this.props.state.jobPosition} at ${this.props.state.companyName}`}</span>
                                    <small>{`(${this.props.state.companyStartDate} - ${this.props.state.companyEndDate})`}</small>
                                    <p>{this.props.state.companyDuties}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="education-container">
                            <ul className="content-list education">
                            <h2 className="content-heading">Education</h2>
                                <li>
                                    <div>
                                    <span>{`Student at ${this.props.state.university}`}</span>
                                    <small>{`(${this.props.state.universityStartDate} - ${this.props.state.universityEndDate})`}</small>
                                    <p>{this.props.state.universityDuties}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-container container-2">
                        <div>
                            <ul className="content-list profile">
                            <h2 className="content-heading">Profile</h2>
                                <li>{this.props.state.description}</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="content-list contact">
                            <h2 className="content-heading">Contact</h2>
                                <li>{this.props.state.phone}</li>
                                <li>{this.props.state.email}</li>
                                <li>{this.props.state.website}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    };
}

export default Cv