import React,{ useEffect, useState }  from 'react';
import axios from 'axios';
import './projects__langs.css'



function Projects__langs(props) {
    const langs__URL = props.url;
    const API__KEY = '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';
    const [langs, setLangs] = useState([]);
    const fetchlang = async () => {
        axios.get(langs__URL,{
            headers: {
                'Authorization': `Bearer ${API__KEY}` 
            }}).then(res => {
                const resData = res.data
                const resNames = Object.keys(resData);
                setLangs(resNames)
            }
            )
    }

        useEffect(() => {

            fetchlang()
            
    
        },[])
    return (
        <div className='Projects__langs'>
            {langs.map(lang => <span key = {lang} className={lang}>{lang}</span>)}
        </div>
    )
}

export default Projects__langs