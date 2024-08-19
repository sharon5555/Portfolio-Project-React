import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/put.png';
import IMG2 from '../../assets/love.png';
import IMG3 from '../../assets/put.png';
import IMG4 from '../../assets/love.png';
import IMG5 from '../../assets/put.png';
import LOVE from '../../assets/love.png';

const portfolio = () => {
return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={IMG1} />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/shots/following/mobile" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>

            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={IMG2} />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/shots/following/mobile" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>

            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={IMG3} />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/shots/following/mobile" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>

            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={IMG4} />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/shots/following/mobile" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>

            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={IMG5} />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/shots/following/mobile" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>

            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={LOVE} />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/shots/following/mobile" className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>
        </div>
    </section>
)
}

export default portfolio