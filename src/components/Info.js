import React from 'react'
import About from './About'
import Education from './Education'
import Contact from './Contact'
// import a from '../images/a.jpg';
import '../styles/info.css'
function Info() {
    return (
        <div className="info">
            <div className="info__intro">
                <div className="text">
                    <p>Banoth Srikanth</p>
                </div>
                {/* <div className="buttons">
                    <button className="project">Projects</button>
                    <button className="contact">Contact me</button>
                </div> */}
            </div>
            <About />
            <Education />
            <Contact />
        </div>
    )
}
export default Info
