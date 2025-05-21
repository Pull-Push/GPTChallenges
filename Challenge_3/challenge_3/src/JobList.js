import React, {useState, useEffect} from 'react';
import '../src/static/JobCard.css';
import { jobData } from './data/joblist';
import JobCard from './JobCard';

export default function JobList(){
    let cards = jobData
    const [favorites, setFavorites ] = useState([]) //integer array
    const [filterCards, setFilterCards ] = useState(jobData)
    
    const handleFavorite = (jobID) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(jobID)
                ? prevFavorites.filter((id) => id !== jobID) 
                : [...prevFavorites, jobID] 
        );
    };
    

    const handleRemote = (e) =>{
        //TODO Need to check filter search field on click
        console.log('remote status', e)
        if(e === 'all'){
            setFilterCards(cards.filter((card) => card.remote === true || card.remote === false))
        }else if(e === 'remote'){
            setFilterCards(cards.filter((card) => card.remote === true))
        }else{
            setFilterCards(cards.filter((card) => card.remote === false))
        }
        console.log(filterCards)
    }

    const handleFilter = (e) =>{
        console.log('current filtered cards', filterCards)
        let workingFilter = e
        let shownCards = filterCards
        if(workingFilter.length ===  0){
            shownCards = filterCards
        } else {   
            for(let x of shownCards){
                // console.log('shown x', x)
                const values = Object.values(x) //GET ALL VALUES OF CARDS OBJECTS
                for(let y of values){ //GET INDY CARD VALUES
                    // console.log('shown y', y)
                    let stringed = y.toString() //STRING CARD VALUES TO FIX NUMBER AND BOOLEAN ISSUE
                    // console.log( 'stringed y', stringed)
                    if(stringed.includes(workingFilter) && (!(shownCards.includes(x)))){ //FILTER CARDS and avoid dupes
                        shownCards.push(x) //ADD CARD TO FILTER ARRAY
                    }
                }
            }
        }
        // console.log('shown cards final', shownCards)
    setFilterCards(shownCards)
    }


    return(
        <div className='mainDiv'>
            <div>
                <label htmlFor="seach">Filter Jobs</label>
                <input type="text" name="search" id="search" onChange={e => handleFilter(e.target.value)}/>
                <label htmlFor="jobType">Job Type</label>
                <select name="jobType" id="jobType" onChange={e => handleRemote(e.target.value)}>
                    <option value="all">All Jobs</option>
                    <option value="onsite"> Onsite Only</option>
                    <option value="remote">Remote Only</option>
                </select>
            </div>
            <div className='indyCard'>

            { filterCards.map((card, index) =>
                    <JobCard key={index} card={card} handleFavorite={handleFavorite} favorites={favorites}/>
        
            )}
            </div>
        </div>
    )
}