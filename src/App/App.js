import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages';
import Login from './Pages/login';
import Register from './Pages/register';
import Books from './Pages/books';
import CreateBook from './Pages/book.create';
import EditBook from './Pages/book.update';

export class App extends React.Component {
	render() {
		console.log(this.props);
		return (
			<>
				<Router>
					<Switch>
						<Route exact path='/' component={Landing} />
					</Switch>
					<Switch>
						<Route exact path='/login' component={Login} />
					</Switch>
					<Switch>
						<Route exact path='/register' component={Register} />
					</Switch>
					<Switch>
						<Route exact path='/books' component={Books} />
					</Switch>
					<Switch>
						<Route exact path='/books/create' component={CreateBook} />
					</Switch>
					<Switch>
						<Route exact path='/books/edit/:id' component={EditBook} />
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
