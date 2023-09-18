import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import DoubtPage from "./pages/Doubt";
import CoursePage from "./pages/Course-page/Course-page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/doubt" component={DoubtPage} />
        {/* <Route path="/Course" component={CoursePage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
