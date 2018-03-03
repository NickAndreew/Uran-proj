import React, { Component } from 'react';


class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {		
		};

		this.loginFunction = this.loginFunction.bind(this);
		this.logoutFunction = this.logoutFunction.bind(this);
	}

	loginFunction() {
		window.FB.getLoginStatus(function(response) {
			console.log("function Log In Status Runs");
			console.log(response.status);
        });
	}

	logoutFunction() {
		window.FB.logout(function(response) {
			console.log("function Log Out Runs");
			console.log(response);
		});
	}


	render() {
		return (
			<div className="NavBar">
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand">Facebook Media Viewer</a>
						</div>
						<ul className="nav navbar-nav">
							<li className="active"><a>Home</a></li>
							<li className="active"><a>Page 1</a></li>
							<li><a>Page 2</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a><span className="glyphicon glyphicon-user" onClick = { this.logoutFunction }></span> Log Out</a></li>
							<li><a><span className="glyphicon glyphicon-log-in" onClick = {	this.loginFunction }></span> Login</a></li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
