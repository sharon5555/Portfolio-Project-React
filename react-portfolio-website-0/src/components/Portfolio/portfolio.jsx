import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/put.png';
import IMG2 from '../../assets/love.png';
import IMG3 from '../../assets/put.png';
import IMG4 from '../../assets/love.png';
import IMG5 from '../../assets/put.png';
import LOVE from '../../assets/love.png';


const data = [
    {
        id: 1,
        image: IMG1,
        title:'clock',
        github:'https://github.com',
        demo:'#',
    },

    {
        id: 2,
        image: IMG2,
        title:'weather',
        github:'https://github.com',
        demo:'#',
    },

    {
        id: 3,
        image: IMG3,
        title:'landing page',
        github:'https://github.com',
        demo:'#',
    },

    {
        id: 4,
        image: IMG4,
        title:'nazy landing page',
        github:'https://github.com',
        demo:'#',
    },

    {
        id: 5,
        image: IMG5,
        title:'portfolio',
        github:'https://github.com',
        demo:'#',
    },

    {
        id: 6,
        image: IMG1,
        title:'clock',
        github:'https://github.com',
        demo:'#',
    }
]
const portfolio = () => {
return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
            {
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            
                    )
                })
            }
        </div>
    </section>
)
}

export default portfolio