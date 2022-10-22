import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import './style-about.css'
import IMG from '../images/logo-img.jpeg';
import PageTitle from '../components/PageTitle';

import cssIcone from '../images/skill-icons/css-3.png';
import htmlIcone from '../images/skill-icons/html-5.png';
import jsIcone from '../images/skill-icons/js.png';
import reactIcone from '../images/skill-icons/react.png';
import sassIcone from '../images/skill-icons/sass.png';
import jqueryIcone from '../images/skill-icons/jquery-icon.png';


import ideaIcon from '../images/skill-icons/idea.png';
import codingIcon from '../images/skill-icons/coding.png';
import experienceIcon from '../images/skill-icons/experience.png';
import prototypeIcon from '../images/skill-icons/prototype.png';

import tagIcon from '../images/skill-icons/tag.png';
import reactIcon from '../images/skill-icons/react (1).png';
import nodejsIcon from '../images/skill-icons/nodejs.png';
import jsIcon from '../images/skill-icons/js (1).png';
import psdIcon from '../images/skill-icons/psd.png';
import cmsIcon from '../images/skill-icons/cms.png';

import {Footer} from '../components/Footer';
import { FallingLines } from  'react-loader-spinner';

function About() {
    const webSkills = [htmlIcone, cssIcone, jsIcone, reactIcone, sassIcone, jqueryIcone];
    const personalSkills = [
        {title: 'IDEA',img: ideaIcon}, 
        {title: 'DESIGN',img: prototypeIcon},
        {title: 'DEVELOPMENT',img: codingIcon}, 
        {title: 'SUCCESS',img: experienceIcon},];

    const services = [
        {
            img: tagIcon,
            title: 'HTML & CSS Responsive Web Design',
            decs: 'Enterprise-class websites need consistent colors, fonts, and design to match the organization\'s branding guidelines.front-end developers are experts at designing responsive websites, with CSS at the core of front end development alongside JavaScript and HTML'
        },
        {
            img: reactIcon,
            title: 'React JS Development',
            decs: 'ReactJS is renowned for its extensibility, adjustability, and convenience. ReactJS developer create complex software for your business, including web browsers and mobile application user interfaces.'
        },
        {
            img: nodejsIcon,
            title: 'Node.js Development',
            decs: 'Node.js enables fast and scalable server-side and networking applications. Node.js developer produce dynamic web page content before the page is sent to the end user\'s web browser, using event-driven programming to communicate with web servers through speedy JavaScript interpreters.'
        },
        {
            img: jsIcon,
            title: 'Javascript Development',
            decs: 'JavaScript frameworks sit at the heart of any modern website. JavaScript developer use their extensive experience with core JavaScript development and the newest frameworks and libraries to build dynamic and responsive websites.'
        },
        {
            img: psdIcon,
            title: 'PSD to Bootstrap Services',
            decs: 'Front-end developer convert PSD, Sketch, Ai, and Adobe XD files into pixel-perfect standards that are compliant with HTML5/CSS3/Bootstrap3/4 templates.'
        },
        {
            img: cmsIcon,
            title: 'CMS Theming Services',
            decs: 'Front-end developer deliver prompt and professional theming services for popular CMS platforms such as WordPress, Drupal, and Joomla.'
        }

        
    ]
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=> {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    },[])
    return (
        <div className='about'>
            {isLoading ? (
                <div className='loading__container'>
                    <FallingLines
                        color="#fff"
                        width="100"
                        visible={true}
                        ariaLabel='falling-lines-loading'
                        />
                </div> ) : (
                        <div className='container'>
                            <header>
                            <Header />
                        </header>
                        <div className='flex'>
                            <PageTitle title = 'About'/>
                                <div className='aboutme' >
                                    <div className='aboutme__image'>
                                        <div className='image__container'>
                                            <img
                                                src={IMG}
                                                className=''
                                                alt='personal logo'
                                            />
                                        </div>
                                        
                                    </div>
                                    <div className='aboutme__content'>
                                        <h3>HELLO THERE!</h3>
                                        <p>I'm Karim Mohamed</p>
                                        <p>Junior Front-End Developer</p>
                                        <p>Detail-oriented Front End Developer with more than 2 years experience working with HTML, CSS, Javascript, JQuery, and TypeScript. Highly adept at both independent and collaborative projects, with an emphasis on landing page and website development.</p>
                                    </div>
                                </div>
                                <div className='personal-skills'>
                                    <h3>Expertly-Matched Talent</h3>
                                    <ul className='personal-skills__list'>
                                            {personalSkills.map((icon) => 
                                                <li className='personal-skillsicon'>
                                                    <img 
                                                        className=''
                                                        src= {icon.img}
                                                        alt=''
                                                    />
                                                    <p>{icon.title}</p>
                                                </li>
                                            )}
                                        </ul>
                                </div>
                                <div className='slideshow-container'>
                                    <div class="mySlides">
                                        <q>Always remember that you are absolutely unique. Just like everyone else. </q>
                                        <p class="author">- Margaret Mead</p>
                                    </div>
                                </div>
                                <div className='skills'>
                                        <h3>Skills</h3>
                                        <ul className='skill__list'>
                                            {webSkills.map((icon) => 
                                                <li className='skillsicon'>
                                                    <img 
                                                        className=''
                                                        src= {icon}
                                                        alt=''
                                                    />
                                                </li>
                                            )}
                                        </ul>
                                </div>
                                <div className='Services'>
                                    <h3>Services</h3>
                                    <div className='Services_container'>
                                        {
                                            services.map((service) => 
                                                <div className='Services_item'>
                                                    <img 
                                                        className='Services_img'
                                                        src= {service.img}
                                                        alt=''
                                                    />
                                                    <h4 className='Services_title'>{service.title}</h4>
                                                    <p className='Services_des'>{service.decs}</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    
                                </div>
                                <Footer />
                            </div>
                        </div>
                    )}
            
                
            </div>
            
    )
}

export default About