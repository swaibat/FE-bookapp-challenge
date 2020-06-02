import React, { Component } from 'react';
import constants from '../../redux/constants';
import { register } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Register extends Component {
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
		this.props.init();
		this.props.register(user);
	};
	render() {
		const { payload, error, pending } = this.props;
		return (
			<>
				<div id='bg-content' />
				<div className='cover-container d-flex w-100 h-100 p-3 flex-column mx-auto'>
					<Header />
					<main role='main' className=''>
						<h4 className='cover-heading mb-2 text-center'>Register</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary d-flex align-items-center' style={{ minHeight: '70vh' }}>
							{/* <div className='row w-100 my-auto '> */}
							<div className='col-md-6 m-auto'>
								{payload && <span className='alert alert-success text-center my-3 d-block w-100'>{payload.message}</span>}
								{error && <span className='alert alert-danger text-center my-3 d-block w-100'>{error.message}</span>}
								<form className='mt-4' onSubmit={this.handleSubmit}>
									<div className='form-group'>
										<input type='text' name='username' className='form-control' placeholder='Your Username *' onChange={this.handleInput} required />
									</div>
									<div className='form-group'>
										<input type='text' name='email' className='form-control' placeholder='Your Email *' onChange={this.handleInput} required />
									</div>
									<div className='form-group'>
										<input type='password' name='password' className='form-control' placeholder='Your Password *' onChange={this.handleInput} required />
									</div>
									{pending ? (
										<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit' disabled>
											<span className='spinner-border spinner-border-sm mr-2'></span>registering....
										</button>
									) : (
										<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit'>
											Register
										</button>
									)}
								</form>
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
				type: constants.LOGIN_PENDING,
				pending: true,
			}),

		register: async user => dispatch(await register(user)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.RegisterReducer.payload,
		pending: state.RegisterReducer.pending,
		error: state.RegisterReducer.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
