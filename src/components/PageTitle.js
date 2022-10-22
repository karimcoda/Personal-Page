import React from 'react';
import './pageTitle.css'

function PageTitle(props) {
    return (
        <div className='page__title'>
            <div className='title'>
                    <h2>{props.title}</h2>
                </div>
        </div>
    )
}

export default PageTitle