import React from 'react';
import axios from 'axios';
import {Wrapper, Card} from './StyledComponents/StyledFollowers';

import './App.css';
import GitHubCard from './components/GitHubCard';
import FollowersCard from './components/FollowersCard';




class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: [],
      followers:[]
    }
  }
  
  componentDidMount(){
    axios.get('https://api.github.com/users/matthews7')
      .then(res => {
        this.setState({user: res.data})
        console.log(this.state.user)
      })
      .catch(err => {
        console.log('Error', err)
      });
    
    axios.get('https://api.github.com/users/matthews7/followers')
    .then(res => {
          this.setState({followers: res.data})
          console.log(this.state.followers)
        })
        .catch(err => {
          console.log('Error', err)
        })
  }


  render(){
    return (
      <div className="App">
        <GitHubCard className="border" key={this.state.user.id} user={this.state.user}/>
        <Wrapper>
        {this.state.followers.map(follower => {
          return (
            <Card className="border">
              <FollowersCard key={follower.id} person={follower} />
            </Card>
            
          
          )
        })}

        </Wrapper>
        
        
      </div>
    );
  }

}

export default App;
