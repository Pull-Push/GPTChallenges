import React from 'react';
import '../src/static/JobCard.css';

function toggleFavorite(e){
    console.log('clicked', e.target.style)
    if(e.target.style.color === '') {
        e.target.style.color = 'red'
    }else{
        e.target.style.color = ''
    }
}

export default function JobCard(props){
    let cards = props.jobInfo
    console.log(cards)
    return(
        <div className='mainDiv'>
            { cards.map((card, index) =>
            <div className='cardDiv' key={index}>
                <h1>{card.title} - {card.company}</h1>
                <h2>{card.location}</h2>
                <h3>{card.salaryRange}</h3>
                {card.remote === true ? (
                    <p>Remote Available</p>
                ) : (
                    <p>Onsite Required</p>
                )}
                <h4 id={card.jobID} onClick={toggleFavorite}>SAVE JOB</h4>
            </div>
            )}

        </div>
    )
}