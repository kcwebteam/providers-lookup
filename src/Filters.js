import React from 'react';

class Filters extends React.Component {
    
    render() {
        return <div className="call-out-text call-out-text-default">
            <h3>Filters can go here.</h3>
            <button onClick={()=> this.props.filterByName("Annara")}>filter by Annara</button>
        </div>
    }
}

export default Filters;