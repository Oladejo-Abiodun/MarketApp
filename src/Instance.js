import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';

let Instance =()=>{

    let [listFound,setList]=useState("");
    let inputContainer = useRef(null);
    let budget = useRef(null);
    let collect;

    let testRef=()=>{
        let obj = {date: inputContainer.current.value, budget: budget.current.value, remainAmt: budget.current.value, list: []}
        
        if (inputContainer.current.value == "" && budget.current.value) {
            setList("Choose a Date");
        }

        else if (localStorage.grocery) {
            collect = JSON.parse(localStorage.grocery)
            collect.push(obj);
            localStorage.grocery = JSON.stringify(collect);
            setList("Added");

        } else {
            let list = [obj];
            localStorage.grocery = JSON.stringify(list);
            setList("Added");
        }
    }
    
    return(
        <>
    
            <div class="container mt-4">
                <div className="row">
                    <div className="card mx-auto" style={{width: '450px', height:'260px'}}>
                        <div className="card-header">Add New Instance</div>
                            <div className="card-body">
                                <input type="date" className="form-control" ref={inputContainer}/><br/>
                                <input type="number" placeholder="Your Budget e.g(N4000)" className="form-control" ref={budget}/>
                                <span className="h5 text-danger">{listFound}</span>
                            </div>

                        <div className="card-footer">
                            <div className="row">
                            <div className="col-3 pt-2">
                                <button type="button" onClick={testRef} className="btn btn-primary btn-block p-2">Add</button>
                             </div>  

                        <div className="col-6 pt-2">
                          <Link to="/Allinstance" className="btn btn-primary btn-block p-2">All instance</Link>
                            </div>  
                                 </div>
                              </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Instance;

