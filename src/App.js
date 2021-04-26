import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import ColorListView from "./views/ColorListView";
import ThanksView from "./views/ThanksView";

export default function App() {
  return (
    <div style={{ display:"flex"}}>
    <Router>
      <div 
        style={{ 
          width: "20vw" , 
          height: "100vh" ,
          border: 2,
          borderStyle:"solid",
          borderColor:"rgb(227, 231, 231)"}}>
        <div>
          <div style={{ margin:10}}>
            Menu
          </div>
          <hr />
          <ul>
            <li>
              <Link to="/colorList">ColorList</Link>
            </li>
            <li>
              <Link to="/thanks">Thanks</Link>
            </li>
          </ul>
      </div>
      </div>
      <div style={{ marginLeft: 100 }}>
          <Switch>
            <Route exact path="/colorList" >
              <ColorListView />
            </Route>
            <Route path="/thanks">
              <ThanksView />
            </Route>
            <Redirect to="/thanks" />
          </Switch>
        </div>
    </Router>
    </div>
  );
}
