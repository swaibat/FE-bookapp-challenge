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

					<main role='main' className='mt-n3'>
						<h4 className='cover-heading mb-2 text-center'>Books</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary' style={{ minHeight: '70vh' }}>
							<div className='w-100 ml-3'>
								<Link to='books/create' className='btn btn-sm btn-success ml-1'>
									Add Book
								</Link>
								<hr />
								{payload && payload.data.length ? (
									<ul className='list-group list-group-flush text-secondary'>
										{payload.data.map((book, index) => (
											<li className='list-group-item px-1'>
												<span className='media'>
													<img className='img-thumbnail ml-0' height='75' width='100' src={Img} alt='book' />
													<span className='ml-3 text-left'>
														<b>title: {book.title}</b>
														<p className='mb-1'>author: {book.author}</p>
														<p className='mb-1'>ISBN: {book.isbn}</p>
													</span>
													<span className='ml-auto d-flex flex-column'>
														<small>3 days ago</small>
														<div className='btn-group btn-group-sm mt-3'>
															<Link to={`books/edit/${book.id}`} className='btn btn-primary'>
																Edit
															</Link>
															<button data-toggle='modal' data-target='#exampleModalCenter' className='btn btn-danger'>
																Delete
															</button>
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
				<div class='modal fade text-secondary' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
					<div class='modal-dialog modal-dialog-centered' role='document'>
						<div class='modal-content'>
							<div class='modal-header'>
								<h5 class='modal-title text-center' id='exampleModalLongTitle'>
									Delete Book
								</h5>
								<button type='button' class='close' data-dismiss='modal' aria-label='Close'>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<div class='modal-body text-center'>
								<h6>Are you sure !!!</h6>
								<p>the book will be permanently deleted</p>
							</div>
							<div class='modal-footer'>
								<button type='button' class='btn btn-secondary' data-dismiss='modal'>
									Close
								</button>
								<button type='button' class='btn btn-sm btn-danger'>
									delete
								</button>
							</div>
						</div>
					</div>
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
