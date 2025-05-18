/* eslint-disable */
import React from "react";

export default function JobCard({card, handleFavorite, favorites}) {
	const {title, company, location, salaryRange, remote, jobID} = card;
    const isFave = favorites.includes(jobID)

    return (
		<div className="cardDiv">
			<h1>
				{title} - {company}
			</h1>
			<h2>{location}</h2>
			<h3>{salaryRange}</h3>
			{remote === true ? (
				<p>Remote Available</p>
			) : (
				<p>Onsite Required</p>
			)}
            { isFave === false ? (
                <h4 id={jobID} onClick={() => handleFavorite(jobID)}>
                    ♡ SAVE JOB ♡
                </h4>
            ) : (
                <h4 id={jobID} onClick={() => handleFavorite(jobID)}>
                    JOB FAVORITED
                </h4>
            )
        }
                
		</div>
	);
}
