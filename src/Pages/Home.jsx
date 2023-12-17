import React from 'react'
import Head from '../Nav-Bar/Header'
import '../Style/Home.css'

const Home = () => (
    <body>
        <Head />
        <section className="home-container">
            <div>
                <h2 className="subtitle">Welcome!</h2>
                <div className="description">
                    <p className="text">
                        <b>Math Experts</b> is a website for all lovers of math.
                        <br />
                        It is a Single Page App <abbr title='Single Page App'></abbr> that allows users to:
                    </p>
                    
                        <li className="listItem">Do simple calculations.</li>
                        <li className="listItem">Read math-related quotes.</li>
                    
                    <p>
                        The app is developed using <i>React </i> 
                        and styled through the <i>React basic styling. </i>
                        Navigation is made possible through <i>React Router.</i>
                    </p>
                </div>
            </div>
        </section>
    </body>
);

export default Home;