import React from 'react';
import WarrantyContainer from '../../containers/WarrantyContainer/WarrantyContainer';

export default class Locker extends React.Component {
    render() {
        return (
            <div className="Locker container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="overflow-auto col-7" >
                        <WarrantyContainer uid={this.props.uid}/>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    }
}