import React from 'react';
import Home from './home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Instance from './Instance';
import Allinstance from './allInstance';
import Forms from './forms';
import Allitem from './Allitem';
import Viewinstance from './Viewinstance';

let App =()=>{
    return(
        <>
            <Router>
                <Switch>
                <Route exact path="/">
                     <Home/>
                </Route>

            <Route exact path = "/Instance">
                <Instance/>
            </Route>

            <Route path = "/Allinstance">
                <Allinstance/>
            </Route>

            <Route exact path = "/Allitem/:id">
                <Allitem/>
            </Route>

            <Route path="/Forms/:i" children={<Forms/>}></Route>

            <Route exact path = "/Allitem/:date/:id"
               children={<Viewinstance/>}>
            </Route>
            
            </Switch>  
        </Router>
        </>
    )
}

export default App;