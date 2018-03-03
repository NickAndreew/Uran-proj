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
        window.fbAsyncInit = function() {
			window.FB.init({
                appId      : '424041198008614',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.12'
            });
            
            window.FB.Event.subscribe("auth.statusChange", (response)=>{
                if(response.authResponse){
                    this.updateLoggedInState(response);
                } else {
                    this.updateLoggedOutState();
                }
            });
		}.bind(this);
		
		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

        window.FB.getLoginStatus(function(response) {
            console.log(response.status);
            if(response.status=="not_authorized"){
                console.log(response.status);
            } else {
                console.log(response.status);
            }

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