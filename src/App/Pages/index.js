import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { token, tokenData } from '../../helper';

class Landing extends Component {
	render() {
		return (
			<>
				<div id='bg' />
				<div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
					<header className='masthead mb-auto'>
						<div className='inner'>
							<nav className='nav  justify-content-between'>
								<Link class='navbar-brand' to='/'>
									BookApp
								</Link>
								<span className='d-flex'>
									<NavLink activeClassName='active' className='nav-link' to='/books'>
										Books
									</NavLink>
									{token ? (
										<>
											<Link className='nav-link' to='#'>
												Hi {tokenData().username} !
											</Link>
											<Link
												onClick={() => {
													localStorage.removeItem('bookapp_token');
													return window.location.replace('/');
												}}
												className='nav-link'
												to='#'
											>
												Logout
											</Link>
										</>
									) : (
										<>
											<NavLink activeClassName='active' className='nav-link' to='/register'>
												Register
											</NavLink>
											<NavLink activeClassName='active' className='nav-link' to='/login'>
												Login
											</NavLink>
										</>
									)}
								</span>
							</nav>
						</div>
					</header>
					<main role='main' className='text-center'>
						<h1 className='cover-heading'>Book Management App</h1>
						<p className='lead'>A relworx Challenge Built on top of React as a frontend Stack and nodejs with Sequelize on backend</p>
						<div className='d-flex justify-content-center mt-3'>
							{token ? (
								<span>
									<Link to='/books' className='btn  btn-light'>
										Explore Books
									</Link>
									<Link to='/books/create' className='btn  btn-success ml-3 px-4'>
										Add A Book
									</Link>
								</span>
							) : (
								<span>
									<Link to='/register' className='btn  btn-light'>
										Register
									</Link>
									<Link to='/login' className='btn  btn-success ml-3 px-4'>
										Login
									</Link>
								</span>
							)}
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
