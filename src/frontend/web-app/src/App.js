import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CorporateBusiness from "./pages/home/CorporateBusiness";
import ScrollToTop from "./helpers/ScrollToTop";


function App() {

  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={CorporateBusiness} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
