import React , { useEffect, useState }from 'react';
import axios from 'axios';
import './projects.css';
import ProjectsLangs from './Projects__langs';
import { FallingLines } from  'react-loader-spinner';


function Projects() {
    
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const url = 'https://api.github.com/users/karimcoda/repos';
    const API__KEY = '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';
        const fetchData = async () => {
                setIsLoading(true);
                await axios.get(url, {
                    headers: {
                        'Authorization': `Bearer ${API__KEY}` 
                    }})
                .then((response) => {
                    const reposData = response.data;
                    setProjects(reposData)
                    setIsLoading(false)
                    

                })
                    
                .catch((err) => {
                    console.log(err.message)
                });
                
                
        }
    
    useEffect(() => {

        fetchData();
        

    },[])
    return (
        <div className='projects'>
            {isLoading ? (<FallingLines
                                color="#fff"
                                width="100"
                                visible={true}
                                ariaLabel='falling-lines-loading'
                                />)
                        :(projects.map(project => {
                    
                    if(project.private === false){
                        return(
                            <div key={project.id} className='project'>
                                <h3 className='project__name'>{ project.name }</h3>
                                <p className='project__description'>{ project.description }</p>
                                <div className='project__languages'><ProjectsLangs url= {project.languages_url}/></div>
                                <p className='project__data-created'>{ project.created_at.slice(0, 10) }</p>
                                <a href={project.html_url} className='btn__code'>Code</a>
                            </div>
                        )
                            
                    }
                    
                }))
                
            }
        </div>
    )
    
}

export default Projects