import React from 'react'
import {Link} from 'react-router-dom'

let Home =()=>{

    return(
        <>
            <div className="container mt-4">
                <div className="row col-6 mx-auto shadow" style={{height: '380px'}}>
                    
                        <div className="col-12 pt-2 mt-4">
                            
                        <Link to="/Instance" className="btn btn-primary btn-block p-2">
                            Create New
                         </Link>
                        </div>

                        <div className="col-12 pt-2">
                        <button type=""  className="btn btn-primary btn-block p-2">
                           View
                        </button>
                        </div>  
                    </div>
                </div>
            
        </>
    )
}
export default Home;