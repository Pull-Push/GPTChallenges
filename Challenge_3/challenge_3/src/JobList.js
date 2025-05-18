import React, {useState} from 'react';
import '../src/static/JobCard.css';
import { jobData } from './data/joblist';
import JobCard from './JobCard';

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
    
    const handleFilter = (e) =>{
        let filterCards = []
        let workingFilter = e
        if(workingFilter.length ===  0){
            filterCards = cards
        } else {   
            for(let x of cards){
                const values = Object.values(x) //GET ALL VALUES OF CARDS OBJECTS
                // console.log('values', values)
                for(let y of values){ //GET INDY CARD VALUES
                    let stringed = y.toString() //STRING CARD VALUES TO FIX NUMBER AND BOOLEAN ISSUE
                    // console.log('inner', stringed)
                    // console.log(typeof stringed)
                    if(stringed.includes(workingFilter) && (!(filterCards.includes(x)))){ //FILTER CARDS and avoid dupes
                        // console.log('found one!')
                        filterCards.push(x) //ADD CARD TO FILTER ARRAY
                    }
                }
            }
        }
            console.log('working filter', workingFilter);
            console.log('filter cards', filterCards);
    }

    

    return(
        <div className='mainDiv'>
            <div>
                <label htmlFor="seach">Filter Jobs</label>
                <input type="text" name="search" id="search" onChange={(e)=> handleFilter(e.target.value)}/>
            </div>
            <div className='indyCard'>

            { cards.map((card, index) => 
                <JobCard key={index} card={card} handleFavorite={handleFavorite} favorites={favorites}/>
            )}
            </div>
        </div>
    )
}