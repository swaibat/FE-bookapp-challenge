import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
		const { title, author, isbn } = this.state;
		const book = { title, author, isbn };
		const token = localStorage.getItem('bookapp_token');
		console.log('weeweweewewewwe', token);
		this.props.init();
		this.props.bookCreate(book, token);
	};
	render() {
		const { payload } = this.props;
		console.log(payload);
		return (
			<>
				<div id='bg-content' />
				<div className='cover-container d-flex w-100 h-100 p-3 flex-column mx-auto'>
					<header className='masthead mb-4'>
						<div className='inner'>
							<nav className='nav  justify-content-between'>
								<Link class='navbar-brand' to='/'>
									BookApp
								</Link>
								<span className='d-flex'>
									<NavLink activeClassName='active' className='nav-link' to='/books'>
										Books
									</NavLink>
									<NavLink activeClassName='active' className='nav-link' to='/register'>
										Register
									</NavLink>
									<NavLink activeClassName='active' className='nav-link' to='/login'>
										Login
									</NavLink>
								</span>
							</nav>
						</div>
					</header>

					<main role='main' className=''>
						<h4 className='cover-heading mb-2 text-center'>Create Book</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary d-flex align-items-center' style={{ minHeight: '70vh' }}>
							<form className='col-md-6 mx-auto' onSubmit={this.handleSubmit}>
								<div className='form-row'>
									<div className='form-group col-md-12'>
										<label htmlFor='title'>Book Title</label>
										<input name='title' type='text' className='form-control' id='title' placeholder='title' onChange={this.handleInput} />
									</div>
									<div className='form-group col-md-12'>
										<label htmlFor='author'>Author</label>
										<input name='author' type='text' className='form-control' id='author' placeholder='author' onChange={this.handleInput} />
									</div>
									<div className='form-group col-md-12'>
										<label htmlFor='isbn'>Isbn</label>
										<input type='text' name='isbn' className='form-control' id='isbn' placeholder='isbn' onChange={this.handleInput} />
									</div>
									<div className='form-group col-md-12'>
										<label htmlFor='image'>Upload book cover</label>
										<input type='file' name='image' className='form-control' id='image' placeholder='upload image' onChange={this.handleInput} accept='image/*' />
									</div>
								</div>

								<button type='submit' className='btn btn-sm btn-primary'>
									Create
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
				type: constants.BOOK_CREATE_PENDING,
				pending: true,
			}),

		bookCreate: async (data, token) => dispatch(await createBook(data, token)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.bookCreate.payload,
		pending: state.bookCreate.pending,
		error: state.bookCreate.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
