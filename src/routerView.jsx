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
import PerformanceTable from './components/performanceDemo/TablePerformanceSort';
import NotFound from './404';
import Dsl from './components/dsl/dsl';
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
                <Route path="/dsl/dsl" component={Dsl} />
                <Route path="/performance/table" component={PerformanceTable} />
                <Route path="/page3" component={Page3} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>   
      );
}


function Home() {
    return <h2>Home</h2>;
}