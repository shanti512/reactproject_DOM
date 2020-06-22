import React from 'react';
import data from './data/data.json';
import logo from './profile_pic.svg';
export default function  Reac_resume(props)
{
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))
    let info=data.profile[props.location.data.id];
    console.log(info.carrer);
    return(
     

        <div className="row justify-content-center">
            <div className="col-lg-3 m-3">
                 <div className="card shadow">
                     <div className="card-body text-center">
                     <img src={logo}  style={{width:"30%"}}></img>
                     <h3>{info.basics.name}</h3>
                     <hr/>
                    
                      <a href={"tel:"+ info.basics.Mobile}>
                      <p>{info.basics.Mobile}</p></a>
                      <a href={"mailto:"+ info.basics.email}>
                     <p >{info.basics.email}</p></a>
                     <p >{info.basics.pin}</p>
                     </div>
                 
                 </div>
            </div>

            <div className="col-lg-8 m-4 ">
                <div className="card shadow p-3">
               <h4 className="text-info">Career Objective</h4>
               <p>{info.carrer}</p>
               <hr/>

               <h4 className="text-info">Educational assets</h4>
               <div class="table-responsive-sm">
               <table class="table table-bordered " >
                <thead >
                    <tr>
                        <th>Sno</th>
                        <th>Institute</th>
                        <th>course</th>
                        <th>percent</th>
                        <th>year</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>1</td>
                        <td>{info.edu.btech}</td>
                        <td>{info.edu.bco}</td>
                        <td>{info.edu.bper}</td>
                        <td>{info.edu.byr}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{info.edu.inter}</td>
                        <td>{info.edu.ico}</td>
                        <td>{info.edu.iper}</td>
                        <td>{info.edu.iyr}</td>
                    </tr>
                    <tr >
                        <td>3</td>
                        <td >{info.edu.ssc}</td>
                        <td>{info.edu.Sco}</td>
                        <td>{info.edu.Sper}</td>
                        <td>{info.edu.Syr}</td>
                    </tr>                   

                </tbody>
                <tfoot>

                </tfoot>
                
            </table>
            </div>
            <hr/>
             <h4 className="text-info">Skills</h4>
             <ul>
             {info.skills.s.map((va) => (
                <li>{va}</li>
             ))}
            
             </ul>
             <hr/>
               <h4 className="text-info">Hobbies</h4>
               <ul>
               {info.hobby.h.map((va) => (
                <li>{va}</li>
             ))}
           </ul>
               
               <hr/>
               <h4 className="text-info">Achievements</h4>
               <ul>
               {info.achieve.ai.map((va) => (
                <li>{va}</li>
             ))}

               </ul>
               <hr/>
               <h4 className="text-info">Declaration</h4>
               <p>{info.achieve.declare}</p>
               
               </div>
            </div>
        </div>
    )
}
