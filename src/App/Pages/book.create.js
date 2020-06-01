import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Img from '../../assets/images/img.png';
import constants from '../../redux/constants';
import { createBook } from '../../redux/actions/book.action';
import { connect } from 'react-redux';

class Book extends Component {
	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value,
			loading: true,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { username, email, password } = this.state;
		const user = { username, email, password };
		const token = localStorage.getItem('booksapp');
		this.props.init();
		this.props.createBook(user, token);
	};
	render() {
		const { payload } = this.props;
		console.log(payload);
		return (
			<>
				<div id='bg-content' />
				<div className='cover-container d-flex w-100 h-100 p-3 flex-column mx-auto'>
					<header className='masthead'>
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

					<main role='main' className='mt-n3'>
						<h4 className='cover-heading mb-2'>Books</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary'>
							<form>
								<div className='form-row'>
									<div className='form-group col-md-6'>
										<label htmlFor='inputEmail4'>Email</label>
										<input type='email' className='form-control' id='inputEmail4' placeholder='Email' />
									</div>
									<div className='form-group col-md-6'>
										<label htmlFor='inputPassword4'>Password</label>
										<input type='password' className='form-control' id='inputPassword4' placeholder='Password' />
									</div>
								</div>
								<div className='form-group'>
									<label htmlFor='inputAddress'>Address</label>
									<input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' />
								</div>
								<div className='form-group'>
									<label htmlFor='inputAddress2'>Address 2</label>
									<input type='text' className='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor' />
								</div>

								<button type='submit' className='btn btn-primary'>
									Sign in
								</button>
							</form>
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

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.BOOKS_PENDING,
				pending: true,
			}),

		books: async data => dispatch(await createBook(data)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.createBook.payload,
		pending: state.createBook.pending,
		error: state.createBook.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
