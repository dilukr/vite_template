import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
//引入分页
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import PerformanceTable from './components/performanceDemo/TablePerformanceSort'
/**
 *  A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL.
 * 
 * 
 * */
{/* */}
export default function RouterView(){
    return (
            <Switch>
                <Route path="/performance/table">
                    <PerformanceTable />
                </Route>
                <Route path="/page3">
                    <Page3 />
                </Route>
                <Route path="/page1">
                    <Page1 />
                </Route>
                <Route path="/page2">
                    <Page2 />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>   
      );
}


function Home() {
    return <h2>Home</h2>;
}