import React from 'react';

class Navtabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<div>
				<ul className="nav nav-tabs">
					<li><a data-toggle="tab" href="#home">Home</a></li>
					<li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
					<li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
					<li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
				</ul>

				<div className="tab-content">
					<div id="home" className="tab-pane fade in active">
						<h3>HOME</h3>
						<div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>			
					</div>
					<div id="menu1" className="tab-pane fade">
						<h3>Menu 1</h3>
						<p>Some content in menu 1.</p>
					</div>
					<div id="menu2" className="tab-pane fade">
						<h3>Menu 2</h3>
						<p>Some content in menu 2.</p>
					</div>
				</div>
			</div>	
		);
	}
}
export default Navtabs;
