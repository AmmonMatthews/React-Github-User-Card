import React from "react";
import { Image } from "../StyledComponents/StyledFollowers";


function FollowersCard ({person}) {

    console.log(person)
    return(
        <div>
            <div>
                <Image src={person.avatar_url}/>
            </div>
            <div>
            <h3>{person.login} </h3>
            </div>
            
            
        </div>
    )
}

export default FollowersCard