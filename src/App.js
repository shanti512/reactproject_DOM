import React from 'react';
import './App.css';
import data from './data/data.json'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Reac_resume from './Reac_resume';
import logo from './profile_pic.svg';
import './css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/resume" component={Reac_resume}></Route>
    </BrowserRouter>
  );
}

let Home=()=>
 {
   let  profiles=data.profile;
   console.log(profiles);
   return( 
   <div>
         <div className="row justify-content-center">
             {profiles.map((values,index)=>(
             <div className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
                <div className="card ">
                   <div className="card-body text-center " >
                     <img src={logo}  style={{width:"30%"}}></img>
                     <h3>{values.basics.name}</h3>
                     <hr/>
                    
                     <a href={"tel:"+ values.basics.Mobile}>
                     <p >{values.basics.Mobile}</p></a>
                     <a href={"mailto:"+ values.basics.email}>
                     <p >{values.basics.email}</p></a>
                     <p >{values.basics.pin}</p>

                     <Link to={{ pathname:"/resume",data:{id:index}}} className="btn btn-dark text-white">View Profile</Link>
                   </div>
                 </div>
              </div>
         ))}
         </div>
   </div>
   )
 }

export default App;
