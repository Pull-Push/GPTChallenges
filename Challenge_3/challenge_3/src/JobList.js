import React, {useState, useEffect} from 'react';
import '../src/static/JobCard.css';
import { jobData } from './data/joblist';
import JobCard from './JobCard';

export default function JobList(){
    let cards = jobData
    const [favorites, setFavorites ] = useState([]) //integer array
    
    const [filterCards, setFilterCards ] = useState(jobData)
    const [remoteCards, setRemoteCards ] = useState(jobData)
    const [ shownCards, setShownCards ] = useState([])

    
    const handleFavorite = (jobID) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(jobID)
                ? prevFavorites.filter((id) => id !== jobID) 
                : [...prevFavorites, jobID] 
        );
    };
    
    useEffect(() =>{
        let tempJobs = []
        console.log(`remote cards ${remoteCards}`)
        console.log(`filter cards ${filterCards}`)
        
        for(let x of remoteCards){
            // console.log(x.jobID)
            for(let y of filterCards){
                // console.log(y.jobID)
                if(x.jobID === y.jobID){
                    // console.log('FOUND ONE!')
                    tempJobs.push(x)
                }
            }
            // console.log(`temp ${tempJobs}`)
            setShownCards(tempJobs)
        }
        console.log(`shown cards are ${shownCards}`)

    }, [remoteCards, filterCards])

    const handleRemote = (e) =>{
        //TODO Need to check filter search field on click
        console.log(`remote pref is ${e}`)
        if(e === 'all'){
            setRemoteCards(cards.filter((card) => card.remote === true || card.remote === false))
        }else if(e === 'remote'){
            setRemoteCards(cards.filter((card) => card.remote === true))
        }else{
            setRemoteCards(cards.filter((card) => card.remote === false))
        }
    }

    const handleFilter = (e) =>{
        let filterJobs = []
        console.log(`search filter is ${e}`)
        for(let x of cards){
            for(let y of Object.values(x)){
                let stringed = y.toString()
                // console.log('stringed', stringed)
                // console.log('search', e)
                if(stringed.includes(e) && (!(filterJobs.includes(x)))){
                    // console.log('MATCH FOUND!')
                    filterJobs.push(x)
                }
                setFilterCards(filterJobs)
            }
            // console.log('filterjobs', filterJobs)
        }   
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
                {/* ADD NO JOBS SHOWN! */}
            { shownCards.map((card, index) =>
                    <JobCard key={index} card={card} handleFavorite={handleFavorite} favorites={favorites}/>
        
            )}
            </div>
        </div>
    )
}