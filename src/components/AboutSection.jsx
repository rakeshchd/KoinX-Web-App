import React, { useState, useEffect } from 'react';
import './AboutSectionStyles.css';

function AboutSection() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="about-section">
            <h2 className='about-section-heading'>About Bitcoin</h2>
            <h3>What is Bitcoin?</h3>
            <p>Bitcoin's price today Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem labore aut tempora ea iusto vel dicta asperiores fugit, in eum cum aliquid dolore omnis perferendis, impedit officia amet exercitationem ab ipsa officiis voluptates tenetur? Soluta unde fuga ipsum enim libero.</p>
            {screenWidth > 850 && <hr />}
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error assumenda, magni a sint adipisci! Commodi ipsa hic dignissimos mollitia molestiae! Tempora, expedita. Repudiandae laudantium possimus tempore provident labore quidem neque facere, quasi accusamus laboriosam ab repellat est minima. Consectetur, architecto! Sapiente, nulla. Fuga veniam beatae natus ea, suscipit ipsum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim quisquam, mollitia ab ex recusandae modi dignissimos quo exercitationem eaque quam rem inventore vel aliquid. Sequi soluta non corporis ducimus maxime error blanditiis nesciunt quis, fuga odio nemo, inventore ratione explicabo, libero incidunt atque cum harum deserunt aut totam odit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet dolore cupiditate tempora modi possimus hic, nobis dolores atque assumenda voluptatibus fugiat neque quis enim aliquam fuga eius ut obcaecati ipsam? Nemo pariatur incidunt, asperiores natus odit mollitia vitae voluptas expedita?</p>
            {screenWidth > 850 && <hr />}
            <h2 className='already-holding'>{screenWidth <= 850 ? 'Already Holding Crypto?' : 'Already Holding Bitcoin?'}</h2>
            <div className='about-section-card'>
                <div className='card-part-one'>
                    <img src="src\assets\part-one-img.jpg" alt="part-one-img" />
                    <div className='card-heading'>
                        <h3>Calculate your Profits</h3>
                        <button>Check Now <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className='card-part-two'>
                    <img src="src\assets\part-two-img.jpg" alt="part-two-img" />
                    <div className='card-heading'>
                        <h3>Calculate your tax liability</h3>
                        <button>Check Now <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            {screenWidth > 850 && <hr />}
            {screenWidth > 850 && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, alias temporibus. Ex dolor nostrum molestiae voluptas cum optio ullam hic natus a quo facilis tenetur labore quae, corrupti, quod cumque porro! Hic, facilis libero! Illum iure quaerat impedit totam. Quam.</p>}
        </div>
    );
}

export default AboutSection;
