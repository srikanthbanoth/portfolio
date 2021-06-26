import React from 'react'
import '../styles/sidebar.css'
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sidebar() {
    // async function changeColors(event){
    //     let h1=document.querySelector('h1');
    //     // var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
    //     for(;;){
    //         var x = Math.floor(Math.random() * 256);
    //         var y = 100 + Math.floor(Math.random() * 256);
    //         var z = 50 + Math.floor(Math.random() * 256);
    //         var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //         h1.style.color = bgColor;
    //         await sleep(1000);
    //     }
    // }
    // function sleep(delay){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             resolve();
    //         }, delay);
    //     })
    // }
    return (
        <div className="sidebar">
            <ul className="sidebar__first">
                <li><img src="https://java2blog.com/wp-content/uploads/2021/01/module-img4.svg" alt="banoth" /></li>
                <li><h1>Banoth Srikanth</h1></li>
                <li className="name">bnthsrikanth@gmail.com</li>
            </ul>
            <ul className="sidebar__links">
                <li><a href="#About">About</a></li>
                <li><a href="#Education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="sidebar__social">
                <li> <a href="https://github.com/srikanthbanoth/"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="facebook"/></a></li>
                <li><a href="https://www.linkedin.com/in/banoth-srikanth-742579170/"><img src="https://img.icons8.com/ios-filled/48/000000/linkedin.png" alt="linkedin"/></a></li>
                <li><a href="https://www.instagram.com/srikanthb__/"><img src="https://img.icons8.com/material-outlined/48/000000/instagram-new.png" alt="instagram"/></a></li>
            </ul>
        </div>
    )
}

export default Sidebar