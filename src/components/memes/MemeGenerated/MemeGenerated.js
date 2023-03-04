import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import styles from './styles.module.css'
const MemeGenerated =() =>{

const navigate = useNavigate()
const location = useLocation();
const url = new URLSearchParams(location.search).get('url')




return(
    
    <div>
        
        
        
        {url && <img alt='memes' src={url}/>}

    </div>
)
}

export default MemeGenerated
