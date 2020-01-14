import React from 'react';
import axios from 'axios'

import logo from './logo.svg';
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
        <GitHubCard key={this.state.user.id} user={this.state.user}/>
        
        {this.state.followers.map(follower => {
          return (
          <div>
            <FollowersCard key={follower.id} person={follower} />
          
          </div>)
        })}
        
      </div>
    );
  }

}

export default App;
