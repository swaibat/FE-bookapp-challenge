import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light fixed-top bg-white shadow'>
				<a className='navbar-brand' href='/'>
					Biz.ug
				</a>
				<button
					className='navbar-toggler rounded-sm'
					type='button'
					data-toggle='collapse'
					data-target='#navbarCollapse'
					aria-controls='navbarCollapse'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarCollapse'>
					<div className='d-flex ml-auto mt-2 mt-md-0'>
						<button className='btn btn-primary my-2 mx-4 my-sm-0 btn-sm' type='submit'>
							<span className='mr-2'>
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Advert
						</button>
						<div className='btn-group' role='group' aria-label='Basic example'>
							<a href='/register' type='button' className='btn btn-sm btn-outline-primary'>
								signup
							</a>
							<a href='/login' type='button' className='btn btn-sm btn-secondary'>
								Login
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
