import React from 'react';
import './App.css';
import Filters from './Filters'
import ProviderList from './ProviderList'

class App extends React.Component {
	constructor() {
		super();
		this.state = { providers: [], fullProvidersList:[] };
		this.filterByName = this.filterByName.bind(this);
	} 
	 
	componentDidMount() { 
		fetch('//data.kingcounty.gov/resource/vkks-p86u.json?$order=kcbho_provider_network ASC')
			.then(data => data.json())
			.then(providers => {
				this.setState({ providers, fullProvidersList: providers });
			});
	}

	filterByName(name){
		const {fullProvidersList} = this.state;
		const filteredProvidersList = fullProvidersList.filter(provider => {
			return provider.kcbho_provider_network.toLowerCase().indexOf(name.toLowerCase()) > -1;
		});
		this.setState({providers:filteredProvidersList});
	}
	
	render() {
		const {providers} = this.state;
		return (
      <div className="row">
        <div className="col-sm-4">
          <Filters filterByName={this.filterByName}/>
        </div>
        <div className="col-sm-8">
          <ProviderList providers={providers}  />
        </div>
      </div>
    
		);
	}
}

export default App;
