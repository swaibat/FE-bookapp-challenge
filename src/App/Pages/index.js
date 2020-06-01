import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		return (
			<>
				<div id='bg' />
				<div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
					<header className='masthead mb-auto'>
						<div className='inner'>
							<h3 className='masthead-brand'>Bookapp</h3>
							<nav className='nav nav-masthead justify-content-center'>
								<NavLink activeClassName='active' className='nav-link' to='/books'>
									Books
								</NavLink>
								<NavLink activeClassName='active' className='nav-link' to='/register'>
									Register
								</NavLink>
								<NavLink activeClassName='active' className='nav-link' to='/login'>
									Login
								</NavLink>
							</nav>
						</div>
					</header>

					<main role='main' className='inner cover text-center'>
						<h1 className='cover-heading'>Book Management App</h1>
						<p className='lead'>A relworx Challenge Built on top of React as a frontend Stack and nodejs with Sequelize on backend</p>
						<div className='lead d-flex text-center mx-auto'>
							<Link to='/register' className='btn  btn-light'>
								Register
							</Link>
							<Link to='/login' className='btn  btn-success ml-3 px-4'>
								Login
							</Link>
						</div>
					</main>

					<footer className='mastfoot mt-auto'>
						<div className='inner'>
							<p>
								Built with Love by <a href='https://github.com/swaibat'>swaibat</a>.
							</p>
						</div>
					</footer>
				</div>
			</>
		);
	}
}

export default Landing;
