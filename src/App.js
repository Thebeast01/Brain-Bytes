// import AboutUs from './components/AboutUs';
import Home from "./pages/Home";
// import Blog from "./components/blog/Blog"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  
      // <Router>
      //   <Route exact path='/journal' component={Blog} />
      // </Router>
  return <Home />;
  // <Route exact path='/journal' component={Blog} />
}

export default App;