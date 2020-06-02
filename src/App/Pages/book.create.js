import React, { Component } from 'react';
import constants from '../../redux/constants';
import { createBook } from '../../redux/actions/book.action';
import { connect } from 'react-redux';
import { token } from '../../helper';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Redirect } from 'react-router-dom';

class Book extends Component {
	state = {};
	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value,
			loading: true,
		});
		if (e.target.name === 'image') {
			this.setState({ image: e.target.files[0] });
		}
	};

	handleSubmit = e => {
		e.preventDefault();
		const form = new FormData();
		for (const key in this.state) {
			if (this.state.hasOwnProperty(key)) {
				form.append(key, this.state[key]);
			}
		}
		this.props.init();
		this.props.bookCreate(form, token);
	};
	render() {
		console.log(this.state);
		const { payload, error, pending } = this.props;
		return (
			<>
				{!token && <Redirect to='/login' />}
				{payload && <Redirect to='/books' />}
				<div id='bg-content' />
				<div className='cover-container d-flex w-100 h-100 p-3 flex-column mx-auto'>
					<Header />
					<main role='main' className=''>
						<h4 className='cover-heading mb-2 text-center'>Create Book</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary d-flex align-items-center' style={{ minHeight: '70vh' }}>
							<form className='col-md-6 mx-auto' onSubmit={this.handleSubmit}>
								{error && <span className='alert alert-danger text-center my-3 d-block w-100'>{error.message}</span>}
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

								{pending ? (
									<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit' disabled>
										<span className='spinner-border spinner-border-sm mr-2'></span>creating....
									</button>
								) : (
									<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit'>
										Create
									</button>
								)}
							</form>
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
