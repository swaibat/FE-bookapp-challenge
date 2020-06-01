import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Img from '../../assets/images/img.png';
import constants from '../../redux/constants';
import { getBooks } from '../../redux/actions/book.action';
import { connect } from 'react-redux';

class Book extends Component {
	componentDidMount() {
		this.props.init();
		this.props.books();
	}
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
							<Link to='books/create' className='btn btn-sm btn-success ml-1'>
								Add Book
							</Link>
							{payload && payload.data.length ? (
								<ul className='list-group list-group-flush text-secondary'>
									{payload.data.map((book, index) => (
										<li className='list-group-item'>
											<span className='media'>
												<img className='img-thumbnail' height='75' width='100' src={Img} alt='book' />
												<span className='ml-3 text-left'>
													<b>title: {book.title}</b>
													<p className='mb-1'>author: {book.author}</p>
													<p className='mb-1'>ISBN: {book.isbn}</p>
												</span>
												<span className='ml-auto d-flex flex-column'>
													<small>3 days ago</small>
													<div className='btn-group btn-group-sm mt-3'>
														<Link to={`books/${book.id}`} className='btn btn-primary'>
															Edit
														</Link>
														<Link to={`books/${book.id}`} className='btn btn-danger'>
															Delete
														</Link>
													</div>
												</span>
											</span>
										</li>
									))}
								</ul>
							) : (
								<h3 className='text-center p-5'>No books Found</h3>
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

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.BOOKS_PENDING,
				pending: true,
			}),

		books: async () => dispatch(await getBooks()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.BooksReducer.payload,
		pending: state.BooksReducer.pending,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
