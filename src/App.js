import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = { providers: [] };
	} 
	 
	componentDidMount() { 
		fetch('//data.kingcounty.gov/resource/vkks-p86u.json?$order=kcbho_provider_network ASC')
			.then(data => data.json())
			.then(providers => this.setState({ providers }));
	}
	
	render() {
		return (
        <div>
				<ProviderContainer data={this.state.providers}  />
	      </div>
		);
	}
}

let ProviderContainer = (props) =>
	<div className='col-sm-12'>

		{props.data.map((provider) =>
				<ProviderDiv key={provider.kcbho_provider_network} data={provider} />)}

	</div>; 

  
let ProviderDiv = (props) =>



        <div className="call-out-text call-out-text-default">
          <h3>{ props.data.kcbho_provider_network }</h3>
					
          <p><em>{ props.data.special_notes }</em></p>
          <p>{ props.data.address_address }</p> 
					<p>{ props.data.address_city }, { props.data.address_state } { props.data.address_zip }</p>
          <p>{ props.data.phone }</p>
          <a href={props.data.website}>Website</a>
          <div className="row">
            <div className="col-sm-6">
              <h4>Services</h4>
              <p>{ props.data.mental_health }</p>
              <p>{ props.data.substance }</p>
              <p>{ props.data.opioid }</p>
              <p>{ props.data.detox }</p>
              

            </div>
            <div className="col-sm-6">
              <h4>Groups served</h4>
              <p>{ props.data.adults }</p>
              <p>{ props.data.families }</p>
              <p>{ props.data.youth }</p>
              <p>{ props.data.older_adults }</p>
              

            </div>
          </div>
        </div>;

export default App;
