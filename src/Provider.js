
import React from "react";

const Provider = ({provider}) => {
    const {kcbho_provider_network, special_notes, address_address, address_city, address_state, address_zip, phone, website, mental_health, substance, opioid, detox, adults, families, youth, older_adults} = provider;
    return (
        <div className="call-out-text call-out-text-default">
            <h3>{kcbho_provider_network}</h3>
            <p>
            <em>{special_notes}</em>
            </p>
            <p>{address_address}</p>
            <p>
            {address_city}, {address_state} {address_zip}
            </p>
            <p>{phone}</p>
            <a href={website}>Website</a>
            <div className="row">
                <div className="col-sm-6">
                    <h4>Services</h4>
                    <p>{mental_health}</p>
                    <p>{substance}</p>
                    <p>{opioid}</p>
                    <p>{detox}</p>
                </div>
                <div className="col-sm-6">
                    <h4>Groups served</h4>
                    <p>{adults}</p>
                    <p>{families}</p>
                    <p>{youth}</p>
                    <p>{older_adults}</p>
                </div>
            </div>
      </div>
    )
}

export default Provider;

