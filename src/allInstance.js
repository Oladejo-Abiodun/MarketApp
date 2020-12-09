import React from 'react';
import {Link} from 'react-router-dom';


let Allinstance = ()=>{
    let getData = JSON.parse(localStorage.grocery)
  
    return(
        <>
           <div className="container mt-4">
                    <div className="card mx-auto" style={{width: '450px'}}>
                        <div className="card-header">All instances</div>

                            <div className="card-body">
                            {getData.map((data, i)=>{
                                return(
                            <Link to={`/Forms/${i}`}><p key = {i}>
                                    {data.date}
                                </p></Link>)
                            })}

                            </div>
               </div>
           </div>
        </>
    )
}

export default Allinstance;