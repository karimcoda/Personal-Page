import React, {useState, useEffect} from 'react';
import Icons from '../components/Icons';
import Header from '../components/Header';
import './style-home.css';
import { FallingLines } from  'react-loader-spinner';
import {Footer} from '../components/Footer';

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=> {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    },[])

    return(
            <div className='home'>
                {isLoading ? (<div className='loading__container'>
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
            
                            <div className='app__container'>
                                <div className='flex'>
                                    <h1>Welcome I'm <span className='k__text'>KARIM</span></h1>
                                    <h3>FrontEnd developer</h3>
                                    <p className='home__text'>Experienced Front-End Web Developer with knowledge of Javascript, HTML5, CSS3, Bootstrap, React, and Node.js</p>
                                    <div className='icon'>
                                    <Icons />
                                    </div>
                                </div>
                                
                            </div>
                            <Footer/>
                        </div>
                        
                    ) }
                    
                    </div>
    )
    


                    }
export default Home