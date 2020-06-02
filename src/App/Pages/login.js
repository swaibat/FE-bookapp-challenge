import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { login } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	handleInput = e => {
		this.setState({
			[e.target.type]: e.target.value,
			loading: true,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const user = { email, password };
		this.props.init();
		this.props.login(user);
	};
	render() {
		const { payload, error, pending } = this.props;
		return (
			<>
				{payload && <Redirect to='/books' />}
				<div id='bg-content' />
				<div className='cover-container d-flex w-100 h-100 p-3 flex-column mx-auto'>
					<Header />
					<main role='main' className=''>
						<h4 className='cover-heading mb-2 text-center'>Login</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary d-flex align-items-center' style={{ minHeight: '70vh' }}>
							<div className='col-md-6 m-auto'>
								{error && <span className='alert alert-danger text-center my-3 d-block w-100'>{error.message}</span>}
								<form onSubmit={this.handleSubmit}>
									<div className='form-group'>
										<input type='email' className='form-control' placeholder='Your Email *' onChange={this.handleInput} />
									</div>
									<div className='form-group'>
										<input type='password' className='form-control' placeholder='Your Password *' onChange={this.handleInput} />
									</div>
									{pending ? (
										<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit' disabled>
											<span className='spinner-border spinner-border-sm mr-2'></span>signing in....
										</button>
									) : (
										<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit'>
											Signin
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

		login: async user => dispatch(await login(user)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.LoginReducer.payload,
		pending: state.LoginReducer.pending,
		error: state.LoginReducer.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
