import React from 'react';
import Projects from '../components/Projects';
import Header from '../components/Header';
import './style-portfolio.css';
import PageTitle from '../components/PageTitle';
import {Footer} from '../components/Footer';


function Portfolio() {
  
  return (
    <div className='portfolio'>
      <Header />
      <div className='flex'>
        <PageTitle title= 'Portfolio'/>
        <div className='portfolio__container'>
          <Projects />
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Portfolio