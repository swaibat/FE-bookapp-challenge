import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className='mastfoot mt-auto'>
				<div className='inner'>
					<p>
						Built with Love by <a href='https://github.com/swaibat'>swaibat</a>.
					</p>
				</div>
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
								<button type='button' className='btn btn-sm btn-danger'>
									delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
