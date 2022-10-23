import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import './style-contact.css'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {Footer} from '../components/Footer';

import { FallingLines } from  'react-loader-spinner';
function Contact() {

    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=> {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    },[])
    return (
        <div className='l'>
            {
                isLoading? (
                    <div className='loading__container'>
                        <FallingLines
                            color="#fff"
                            width="100"
                            visible={true}
                            ariaLabel='falling-lines-loading'
                        />
                    </div>
                ) : (
                    <div className='contact'>
                        <header>
                            <Header />
                        </header>
                        <div className='flex'>
                            <PageTitle title= 'Contact Me'/>
                        </div>
                        <div className='contact--container'>
                            <div className='contact-information'>
                                <h3>Contact Me</h3>
                                <ul className='list-information'>
                                    <li className='item'>
                                        <span className='item-icon'><FaMapMarkerAlt /></span>
                                        <span className='item-text'>Milano, Italy</span>
                                    </li>
                                    <li className='item'>
                                        <span className='item-icon'><FaPhoneAlt/></span>
                                        <span className='item-text'>3889944176</span>
                                    </li>
                                    <li className='item'>
                                        <span className='item-icon'><MdEmail/></span>
                                        <span className='item-text'>karimcoda2@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='contact-massage'>
                                <h3>Get In Touch</h3>
                                <form>
                                    <fieldset>
                                        <label>
                                            <p>Name:</p> 
                                            <input type='text' name='name'/>
                                        </label>
                                        <label>
                                            <p>Email:</p>
                                            <input type='email' name='mail'/>
                                        </label>
                                        <p>Massage:</p>
                                        <textarea name='massage'></textarea>
                                    </fieldset>
                                    
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                )
            }
        </div>
        
    )
}

export default Contact