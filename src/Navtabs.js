import React from 'react';

class Navtabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<ul className="nav nav-tabs">
				<li className="active"><a data-toggle="tab" href="#home">Home</a></li>
				<li><a data-toggle="tab" href="#menu1" onClick={
					() => {
						
					}
				}>Menu 1</a></li>
				<li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
				<li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
		  	</ul>
		);
	}
}
export default Navtabs;
