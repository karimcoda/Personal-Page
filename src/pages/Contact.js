import React from 'react';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

function Contact() {
    return (
        <div className='contact'>
            <header>
                <Header />
            </header>
            <div className='flex'>
                <PageTitle title= 'Contact'/>
            </div>
        </div>
    )
}

export default Contact