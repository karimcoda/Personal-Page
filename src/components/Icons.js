import React from 'react';

import facrbookIcon from '../images/social-media-icons/facebook.png';
import instagramIcon from '../images/social-media-icons/instagram.png';
import linkedinIcon from '../images/social-media-icons/linkedin.png';
import twitterIcon from '../images/social-media-icons/twitter.png';

import './style-icons.css';

function Icons() {
    return (
        <div>
            <ul className='socialmediaicone'>
                <li className='socialmediaicon'>
                    <a>
                        <img
                        src={facrbookIcon}
                        className='icon__facebook'
                        alt=''
                        />
                    </a>
                </li>
                <li className='socialmediaicon'>
                    <a>
                        <img
                            src={instagramIcon}
                            className='icon__instgram'
                            alt=''
                            />
                    </a>
                </li>
                <li className='socialmediaicon'>
                    <a>
                        <img
                            src={linkedinIcon}
                            className='icon__instgram'
                            alt=''
                            />
                    </a>
                </li>
                <li className='socialmediaicon'>
                    <a>
                        <img
                            src={twitterIcon}
                            className='icon__instgram'
                            alt=''
                            />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Icons