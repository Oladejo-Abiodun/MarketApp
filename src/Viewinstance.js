import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

let Viewinstance = ()=>{
    let {date, id} = useParams();
    let getData = JSON.parse(localStorage.grocery);
    let getF = getData.find((each, j)=>each.date === date);

    let g = getF.list[id];
    
    return(
        <>
        <div class="container mt-4">
            
                <div class="card col-6 mx-auto">
                    <div class="card-body">
                        <h5>List of all Items</h5>
                            <h5><small>
                               Name:{g.name}<br></br>
                                Price:{g.price}<br></br>
                               Quantity:{g.quantity}<br></br>
                                Time:{g.time}<br></br>
                                Total:{g.Total}<br></br>
                           </small> </h5>
                    </div>
        </div>
        </div>
          
        </>
    )
}

export default Viewinstance;
