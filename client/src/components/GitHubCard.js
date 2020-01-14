import React from "react";
import  {Wrapper, Image } from "../StyledComponents/StyledGitHubCard"


function GitHubCard ({user}) {

    console.log(user)
    return(
        <Wrapper>
            <div>
                <Image src={user.avatar_url}/>
            </div>
            <div>
            <h3>{user.name} </h3>
            <p>{user.company}</p>
            <p>{user.location}</p>
            <p>Bio:{user.bio}</p>
            </div>
            
            
        </Wrapper>
    )
}

export default GitHubCard