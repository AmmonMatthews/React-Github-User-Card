import React from "react";



function FollowersCard ({person}) {

    console.log(person)
    return(
        <div>
            <div>
                <img src={person.avatar_url}></img>
            </div>
            <div>
            <h3>{person.login} </h3>
            </div>
            
            
        </div>
    )
}

export default FollowersCard