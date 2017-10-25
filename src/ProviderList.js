import React from "react";
import Provider from './Provider';

const ProviderList = ({providers}) => {
    return (
        <div className="col-sm-12">
            {providers.map((provider, i) => <Provider key={i} provider={provider} />)}
        </div>
    )
}

export default ProviderList;
