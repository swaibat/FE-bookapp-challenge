import React, { Component } from 'react';
import constants from '../../redux/constants';
import { register } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';

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
		console.log('hello', payload);
		return (
			<div className='container h-100 d-flex align-items-center'>
				<div className='row w-100 my-auto '>
					<div className='col-md-6 m-auto'>
						<h3 className='text-dark text-center'>Register</h3>
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
