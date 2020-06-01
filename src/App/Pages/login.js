import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { login } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

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
						<h4 className='cover-heading mb-2 text-center'>Login</h4>
						<div className='w-100 bg-white p-4 rounded shadow-sm text-secondary d-flex align-items-center' style={{ minHeight: '70vh' }}>
							{/* <div className='row w-100 my-auto '> */}
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
								</form>
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
