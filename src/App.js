import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About Us/AboutUs';
import DoubtPage from './pages/Doubts/Doubt';
import CoursePage from './pages/Course-page/Course-page';
import LoginSignup from './components/Login/Login/LoginSignup';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/Doubt' component={DoubtPage} />
				{/* <Route path="/Course" component={CoursePage} /> */}
				<Route path='/olympiad' component={CoursePage} />
				<Route path='/boards' component={CoursePage} />
				<Route path='/competitive' component={CoursePage} />
				<Route path='/ncert' component={CoursePage} />
				<Route path='/login' component={LoginSignup} />
			</Switch>
		</Router>
	);
}

export default App;
