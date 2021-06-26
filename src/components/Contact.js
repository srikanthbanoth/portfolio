import React from 'react'
import '../styles/contact.css'

function Contact() {
    return (
        <div className="Contact" id="contact">
            {/* <h1>Contact Me</h1> */}
            <div className="form">
            {/* <h1>Contact Me</h1> */}
                <img src="https://java2blog.com/wp-content/uploads/2021/01/module-img2.svg" alt="pic"/>
                <div className="form__input">
                    <input type='text' placeholder='Name'/>
                    <input type="email" placeholder="Email"/>
                   <button>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
