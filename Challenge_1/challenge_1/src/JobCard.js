import React from 'react';
import '../src/static/JobCard.css';


export default function JobCard(props){
    console.log(props.jobInfo)
    return(
        <div className='cardDiv'>
            <h1>Job Title</h1>
            <h2>company</h2>
            <h3>location</h3>
            <p>Salary Range</p>
            <p>remote status</p>
            <br />
            <label htmlFor="save">Save This Job</label>
            <input type="checkbox" name="save" id="favorite" />
        </div>
    )
}