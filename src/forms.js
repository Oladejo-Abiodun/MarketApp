import React, {useState, useRef, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

let Form =()=>{
    let {i}=useParams();
    let [listFound,setList]=useState("");
    
    let getData= JSON.parse(localStorage.grocery);

        let [Item, setPerson] = useState({name: "", quantity: "", price: "", status: false});

      
        const handleChange =(e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setPerson({...Item, [name]: value});
        }

       

        let date = getData[i].date;

            const handleSubmit = (e)=>{
            e.preventDefault()
            if (Item.name !== "" && Item.quantity !== "" && Item.price !=="") {
                let instance = getData.map((each, i)=>each.date === date?{...each, list:[...each.list, 
                    {...Item, status: false, Total: Item.quantity * Item.price, 
                        time:new Date().getHours() + ":" + 
                    new Date().getMinutes()
                }]}:each);
                setPerson(instance);
                localStorage.grocery = JSON.stringify(instance);
                setList("Successful")


            } else {
                setList("Fill in the Input")
            }
        }

      

    return(
        <>
           <div className="container mt-4">
               
                <div className="card mx-auto" style={{width: '450px', height: '430px'}}>
                    <form onSubmit={handleSubmit}>
                    <div className="card-header h5">Instances for {date}</div>
                    <div className="card-body">
                        <span className="h5 text-danger">{listFound}</span>

                       
                        <div className="col-12">
                            <input className="form-control" name="name" value={Item.name} onChange={handleChange} 
                            placeholder="Name"/>
                        </div>

                        <div className="col-12 mt-4">   
                            <input className="form-control" name="quantity" value={Item.quantity}
                            onChange={handleChange}
                             placeholder="Quantity"/>
                        </div>

                        <div className="col-12 mt-4">
                            <input className="form-control" name="price" value={Item.price} 
                            onChange={handleChange}
                            placeholder="Price"/>
                        </div>
                        <span>Total: {Item.quantity * Item.price}</span>
                        </div>
                   
                    <div className="card-footer">
                        <div className="row">
                        <div className="col-3 pt-2">
                                <button type="submit" className="btn btn-primary btn-block p-2">Add</button>
                             </div>

                             <div className="col-3 pt-2">
                             <Link to={`/Allitem/${i}`} className="btn btn-primary btn-block p-2">View</Link>
                             </div>
                        </div>
                    </div>
                    </form>
                </div>
           </div>
          
        </>
    )
}

export default Form;