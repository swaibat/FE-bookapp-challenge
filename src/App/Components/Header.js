import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { token, tokenData } from '../../helper';
import { Redirect } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<>
				<header className='masthead mb-4'>
					<div className='inner'>
						<nav className='nav  justify-content-between'>
							<Link className='navbar-brand' to='/'>
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
			</>
		);
	}
}

export default Header;
