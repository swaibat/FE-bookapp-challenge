import React, { Component } from 'react';
import constants from '../../redux/constants';
import { getBooks } from '../../redux/actions/book.action';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link, Redirect } from 'react-router-dom';
import { token } from '../../helper';

class Book extends Component {
	componentDidMount() {
		this.props.init();
		this.props.books();
	}
	render() {
		const { payload, pending } = this.props;
		return (
			<>
				{!token && <Redirect to='/login' />}
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
											<li className='list-group-item px-1'>
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
															<button data-toggle='modal' data-target='#exampleModalCenter' className='btn btn-danger'>
																Delete
															</button>
														</div>
													</span>
												</span>
											</li>
										))}
									</ul>
								)}
								{!pending && payload && !payload.data.length && <h3 className='text-center p-5'>No books Found</h3>}
								{pending && (
									<h1 className='text-center'>
										<span className='spinner-border spinner-border-lg m-auto text-primary' />
									</h1>
								)}
							</div>
						</div>
					</main>
					<Footer />
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
