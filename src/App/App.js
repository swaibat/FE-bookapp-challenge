import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages';
import Login from './Pages/login';
import Register from './Pages/register';
// import Header from './Components/Header';
// import Footer from './Components/Footer';

export class App extends React.Component {
	render() {
		return (
			<Router>
				{/* <Header /> */}
				<Switch>
					<Route exact path='/' component={Landing} />
				</Switch>
				<Switch>
					<Route exact path='/login' component={Login} />
				</Switch>
				<Switch>
					<Route exact path='/register' component={Register} />
				</Switch>
				{/* <Footer /> */}
			</Router>
		);
	}
}

export default App;
