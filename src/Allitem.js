import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

let Allitem =()=>{
    let {id} = useParams();
    let getData = JSON.parse(localStorage.getItem('grocery'));
    let budget = getData[id].budget;
    let remainAmt = getData[id].remainAmt;
    let itemPurc;
    let itemRem;
   
    let getP = getData[id].list.filter(find => find.status === true);
    itemPurc = getP.length;
    let getR = getData[id].list.filter(find => find.status === false);
    itemRem = getR.length;
    
    
    
        let [item,setItem] =useState(getData);
        let getitem =item[id];
        
         let handleChecked=(e, i)=>{
            let inp = e.target;
            // console.log(inp)
            if (inp.checked) {
                // console.log("checked");
                getData.map((data, index) => {
                    if (index === Number(id)) {
                        let ind = data.list.findIndex((find, j)=> j === i);
                        console.log(ind);
                        getData[index].list[ind].status = true;
                        // console.log(getData);
                        getData[index].remainAmt = Number(getData[index].remainAmt) -
                         Number(getData[index].list[ind].Total);
                        remainAmt = getData[index].remainAmt;
                    }
                })
                localStorage.grocery = JSON.stringify(getData);
                setItem(getData);
            } else {
                getData.map((data, index) => {
                    if (index === Number(id)) {
                        let ind = data.list.findIndex((find, j)=> j === i);
                        // console.log(ind);
                        getData[index].list[ind].status = false;
                        getData[index].remainAmt = Number(getData[index].remainAmt) + Number(getData[index].list[ind].Total);
                        remainAmt = getData[index].remainAmt;
                    }
                })
                localStorage.grocery = JSON.stringify(getData);
                setItem(getData);
            }
        }

    
  
     let deletes =(i)=>{
        getData.map((data, index)=>{
            if (index === Number(id)) {
                let ind = data.list.findIndex((find, j)=> j === i);
              let aa =  getData[index].list.splice(ind, 1)   
            } 
        })
        localStorage.grocery = JSON.stringify(getData)
    }
    
    let date = getData[id].date;
    return(
        <>
        <div className="mt-4 text-center h5">All Instances for {date}</div>
           <div className="container mt-4">
               <div className="float-left">
                    <span>Budget: {budget}</span> <br/>
                    <span> Remain Amt: {remainAmt <= 0.1*budget? <i className="text-danger">{remainAmt}</i>: <i className="text-info">{remainAmt}</i>}
                    </span>
               </div>
               <div className="float-right">
                    <span>Item Purchased:   {itemPurc}</span> <br/>
                    <span>Item not Purchased: {itemRem}</span>
               </div>
                            <div className="table-responsible">
                            <div className="container">             
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>Actions</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {getitem.list.map((data, i)=>(
                                      <tr key={i}>  
                                        <td>{i+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
                                        <td><Link to={`${date}/${i}`} class="btn btn-primary col-3 mb-3">View</Link> 
                                        <button class="btn btn-primary ml-2 col-3 mb-3 mr-3" onClick={()=>deletes(i)}>Delete</button></td>
                                        <td>
                                            <input type="checkbox"
                                            checked={data.status}
                                            onChange={(event)=>handleChecked(event, i)}/>
                                            <label className="pl-2">{data.status == false? "Pending" : "Bought"}</label>
                                        </td>
                                        <td></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="col-12">
                            <Link to="" class="btn btn-warning ml-2 col-3 mb-3">Go back to Add Item</Link>
                            <Link to="/Instance" class="btn btn-warning ml-2 mb-3 col-3">Go back to Instances</Link>
                            </div>
                            </div>
                            </div>    
                    </div>
                    
                    
        </>
    )
}

export default Allitem;