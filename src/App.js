// // import AboutUs from './components/AboutUs';
// import Home from "./pages/Home";
// // import Blog from "./components/blog/Blog"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// function App() {
  
//       // <Router>
//       //   <Route exact path='/journal' component={Blog} />
//       // </Router>
//   return <Home />;
//   // <Route exact path='/journal' component={Blog} />
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutUs';
// import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {/* <Route path="/contact" component={ContactPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;