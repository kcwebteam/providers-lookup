import React from 'react';
import './App.css';
import Filters from './Filters'
import ProviderList from './ProviderList'

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
    const {providers} = this.state;
		return (
      <div class="row">
        <div class="col-sm-4">
          <Filters />
        </div>
        <div class="col-sm-8">
          <ProviderList providers={providers}  />
        </div>
      </div>
    
		);
	}
}

export default App;
