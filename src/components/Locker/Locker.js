import React from 'react';
import './Locker.css';
import WarrantyContainer from '../../containers/WarrantyContainer/WarrantyContainer';
import AdditionalContainer from '../../containers/AdditionalContainer/AdditionalContainer';

export default class Locker extends React.Component {
    render() {
        return (
            <div className="Locker container">
                {/* <h2>Locker Page</h2> */}
                <div className="row">
                    <div className="col-3"></div>
                    <div className="overflow-auto col-7" >
                        <WarrantyContainer uid={this.props.uid}/>
                    </div>
                    <div className="col-3"></div>
                    {/* <div className="col">
                        <AdditionalContainer uid={this.props.uid}/>
                    </div> */}
                </div>
            </div>
        );
    }
}