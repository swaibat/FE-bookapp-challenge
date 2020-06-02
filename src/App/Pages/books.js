import React, { Component } from 'react';
import constants from '../../redux/constants';
import { getBooks, deleteBook } from '../../redux/actions/book.action';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link, Redirect } from 'react-router-dom';
import { token } from '../../helper';

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.props.init();
		this.props.books();
	}
	handleClick(e) {
		e.preventDefault();
		this.setState({ id: e.target.id });
	}
	handleDelete(e) {
		this.props.pending();
		this.props.delBook(token, this.state.id);
	}
	render() {
		const { payload, pending, delPending, delPayload } = this.props;
		return (
			<>
				{!token && <Redirect to='/login' />}
				{delPayload && window.location.reload()}
				<div id='bg-content' />
				<div className='cover-container d-flex w-100 h-100 p-3 flex-column mx-auto'>
					<Header />
					<main role='main' className='mt-n3'>
						<h4 className='cover-heading mb-2 text-center'>Books</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary' style={{ minHeight: '70vh' }}>
							<div className='w-100 ml-3'>
								<Link to='books/create' className='btn btn-sm btn-success ml-1'>
									Add Book
								</Link>
								<hr />
								{payload && payload.data.length && (
									<ul className='list-group list-group-flush text-secondary'>
										{payload.data.map((book, index) => (
											<li key={index} id={book.id} className='list-group-item px-1'>
												<span className='media'>
													<img className='img-thumbnail ml-0' height='75' width='100' src={book.image} alt='book' />
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
															<button data-toggle='modal' id={book.id} onClick={this.handleClick} data-target='#exampleModalCenter' className='btn btn-danger'>
																Delete
															</button>
														</div>
													</span>
												</span>
											</li>
										))}
									</ul>
								)}
								{payload && !payload.data.length && <h3 className='text-center p-5'>No books Found</h3>}
								{!payload && pending && (
									<p className='text-center w-100 mt-5'>
										<span className='spinner-border spinner-border-lg m-auto text-primary' />
									</p>
								)}
							</div>
						</div>
					</main>
					<Footer />
					<div className='modal fade text-secondary' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
						<div className='modal-dialog modal-dialog-centered' role='document'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title text-center' id='exampleModalLongTitle'>
										Delete Book
									</h5>
									<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
										<span aria-hidden='true'>&times;</span>
									</button>
								</div>
								<div className='modal-body text-center'>
									<h6>Are you sure !!!</h6>
									<p>the book will be permanently deleted</p>
								</div>
								<div className='modal-footer'>
									<button type='button' className='btn btn-secondary' data-dismiss='modal'>
										Close
									</button>
									{delPending ? (
										<button type='button' className='btn btn-sm btn-danger' disabled>
											<span className='spinner-border spinner-border-sm mr-2'></span> Deleting ....
										</button>
									) : (
										<button type='button' onClick={this.handleDelete} className='btn btn-sm btn-danger'>
											Delete
										</button>
									)}
								</div>
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
		pending: () =>
			dispatch({
				type: constants.BOOK_DELETE_PENDING,
				pending: true,
			}),

		books: async () => dispatch(await getBooks()),
		delBook: async (token, id) => dispatch(await deleteBook(token, id)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.BooksReducer.payload,
		pending: state.BooksReducer.pending,
		delPayload: state.bookDelete.payload,
		delPending: state.bookDelete.pending,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
