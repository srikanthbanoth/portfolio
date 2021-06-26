import React from 'react'
import '../styles/about.css'
import Card from './Card'
function About() {
    const Projects=[{
        name:'the movie app',
        description:'The Web app uses the TMDB Api to get the list of Movies and Perform some Basic Operations on the data achieved using React hooks and fetch api.',
        code:'https://github.com/srikanthbanoth/MovieApp',
        demo:'https://movieappclone.herokuapp.com/'
    },
    {
        name:'Portfolio',
        description:'Personal Portfolio Web App made using REACT JS ',
        code:'https://github.com/srikanthbanoth/Visualiser',
        // demo:''
    },
    {
        name:'The Favourite Book',
        description:'This Web app Uses Mongo database and Node js to Store and Perform Some CRUD Operations on data and Added Routings',
        code:'https://github.com/srikanthbanoth/favbookstore',
        demo:'https://favbookstore.herokuapp.com/'
       
    },
    {
        name:'Shopping Cart',
        description:'This web app mimics the functionality of Shopping Cart',
        code: 'https://github.com/srikanthbanoth/Ecommerce-Cart',
        demo:'https://shoppingcartclone.herokuapp.com/'
    }
]
    return (
        <div className="About" id="About">
            <div className="aboutme_header">
                <span>ABOUT ME</span>
                <h2>WHO AM I</h2>
                <p>My name is Banoth Srikanth and I am currently pursuing my degree in Bachelor of Technology in Computer Science and Engineering from <a href="www.hub.rgukt.ac.in">RGUKT</a>. I want to be a developer as I am interested in developing new things which excite me a lot.</p>
                <p>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.</p>
            </div>

            <div>
                <span>WHAT I DO?</span>
                <h2>HERE ARE SOME OF MY PROJECTS</h2>
                <div className="projects" id="projects">
                    {
                        Projects.map(project=>{
                            return <Card value={project}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default About
