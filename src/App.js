import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';



class App extends Component {
   constructor(){
       super() 
       this.state = {
           robots: robots,
           searchfield: ''
       }
   }
   onSearchChange= (event) => {
       this.setState({ searchfield: event.target.value })
      
       
   }
    render() {
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        } )
        return (
            <div className="tc pa3 ba b--green bg-light-red">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                   <CardList robots={filteredRobot} />
            </div>
           
        );
    }
    
}

export default App;