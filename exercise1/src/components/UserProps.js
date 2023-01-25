import React from "react";

class UserProps extends React.Component {

	/*
	// state creation I.way
	constructor(props) {
		super(props);
		this.state = {
			test : "StateTest",
			isVisible : true
		}
		//this.onClickEvent = this.onClickEvent.bind(this);
	}
*/

	// state creation II.way
	state = {
		test : "StateTest",
		isVisible : false
	}

	//react eventler
	onClickEvent(event) {		//eğer bunu arrow function yaparsak bind işlemini kendisi otomatik olarak yapıyor
		console.log(event.target);
		console.log("onClickEvent test");
		console.log(this);
	}

	// state değiştirme setState()
	onClickEvent2 = (number,event) => {
		console.log(number);
		this.setState({
			isVisible : !this.state.isVisible
		})
	} 

	render() {
		// destructing
		const {name} = this.props;
		const {isVisible} = this.state;

		return (
			<div>
				<h5 onClick={this.onClickEvent}>USER COMPONENT WITH PROPS</h5>

				<u1>
					<li onClick={this.onClickEvent.bind(this)}> Name : {this.props.name} </li>
					<li onClick={this.onClickEvent2.bind(this,4)}> Name : {name} </li>
				</u1>
				
				{
					isVisible ? <p>{this.state.test}</p>	// isVisible = true
					: null							// isVisible = false
				}
				
			</div>
		);


	}
	
}

export default UserProps;