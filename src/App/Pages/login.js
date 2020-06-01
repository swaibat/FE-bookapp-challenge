import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { login } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';

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
		const { payload } = this.props;
		console.log(payload);
		return (
			<div className='container h-100 d-flex align-items-center text-secondary'>
				<div className='row w-100 my-auto '>
					<div className='col-md-6 m-auto'>
						<h3>Login</h3>
						<form onSubmit={this.handleSubmit}>
							<div className='form-group'>
								<input type='email' className='form-control' placeholder='Your Email *' onChange={this.handleInput} />
							</div>
							<div className='form-group'>
								<input type='password' className='form-control' placeholder='Your Password *' onChange={this.handleInput} />
							</div>
							<div className='form-group'>
								<input type='submit' className='btn btn-primary' value='Login' />
							</div>
							<div className='form-group'>
								<a href='#' className='text-primary'>
									Forget Password?
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
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
