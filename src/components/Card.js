import React from 'react'
import '../styles/card.css'
function Card(props) {
    return (
        <div className="project_card">
            <h3>{props.value.name}</h3>
            <p>{props.value.description}</p>
            <div className="but">
            <a href={props.value.code}><button className="demo">Code</button></a>
            <a href={props.value.demo}><button className="code">Demo</button></a>
            </div>
        </div>
    )
}

export default Card
