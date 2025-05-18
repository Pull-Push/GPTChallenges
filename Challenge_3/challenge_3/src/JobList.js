import React, {useState} from 'react';
import '../src/static/JobCard.css';
import { jobData } from './data/joblist';
import JobCard from './JobCard';
// TODO turn this into a more react version with useState

    // console.log('clicked style', e.target.style)
    // console.log('text', e.target.innerHTML)
    // if(e.target.innerHTML === '♡ SAVE JOB ♡' ) {
    //     e.target.innerHTML = '♥ JOB FAVORITED! ♥'
    // }else{
    //     e.target.innerHTML = '♡ SAVE JOB ♡'
    // }

// TODO Job Card Container + Job Card
export default function JobList(){
    const [favorites, setFavorites ] = useState([]) //integer array
    const handleFavorite = (jobID) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(jobID)
                ? prevFavorites.filter((id) => id !== jobID) 
                : [...prevFavorites, jobID] 
        );
    };
    let cards = jobData
    return(
        <div className='mainDiv'>
            { cards.map((card, index) => 
                <JobCard key={index} card={card} handleFavorite={handleFavorite} favorites={favorites}/>
            )}
        </div>
    )
}