import React ,{useEffect,useState} from 'react';
import "./cards.css";
// import '../index.scss';
import Loader from './loader';

export default function ProfileCard({state}) {
    
    const [user,setUser] =  useState(null);
    var x=state;
    useEffect(() => {
      
     setTimeout(async() => {
        const response = await fetch('https://reqres.in/api/users?page='+x);
        const data = await response.json();
        setUser (data.data);
     }, 200);
     
    },[x])
return (
      <>
          <div className="container">
               
         
  
          {user && 
            user.map((el)=>{
              return(
                      
                    <div className="cards" key={el.id}>
              <div className="img">
                  <img src={el.avatar} alt="img"/>
              </div>
              <h1> {el.first_name} {el.last_name}</h1>
              <h5>{el.email}</h5>
          </div>
  
              )
            })
          }
          {!user && [1,2,3,4,5,6].map((n)=><Loader key={n} />) }
  </div> 
      </>
    );
  
}