import React from 'react';
import Navbar from './Navbar';
import Navtabs from './Navtabs';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
    }
    
    componentDidMount(){
        window.FB.getLoginStatus(function(response) {
            // statusChangeCallback(response);
            console.log(response);
        });
    }

	render() {
		return (
			<div>
                <Navbar />
                <Navtabs />
            </div>
		);
	}
}
export default HomeScreen;