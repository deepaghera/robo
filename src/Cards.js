import React  from 'react';
//import './Cards.css';

const Cards =({name, email , id}) => {

    return(
       <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fixh ">
       
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" height="200px" width='200px'/>
       
          <div>
             <h3>{name}</h3>
           <p>{email}</p> 
          </div>
           
       </div>
    );
}

export default Cards;