import React, { Component } from 'react'
import Github from "../github.png"

class Footer extends Component {
    render() {
        return (
            <>
                <footer id="footer">
                    <a href="https://github.com/nathankim137311/cv-project">
                        <img src={Github} alt="github logo" height="35px" width="35px" />
                    </a>
                </footer>
            </>
        )
    }
}

export default Footer