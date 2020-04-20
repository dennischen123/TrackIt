import React from 'react'
import warrantyAPI from '../../api/warrantyAPI';
import { Link } from 'react-router-dom';
import './Warranty.css';

class Warranty extends React.Component {
    handleDelete(uid, wid) {
        warrantyAPI.destroy(uid, wid)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="col mb-3">
                <div className="Warranty mx-auto">
                    <h3><span>{this.props.warranty.name}</span></h3>
                    <p>Brand: {this.props.warranty.brand}</p>
                    <p>Length: {this.props.warranty.warrantyLength}</p>
                    <p>Date Purchased: {String(this.props.warranty.purchaseDate).slice(0, 10)}</p>
                    <Link className="btn btn-primary btn-sm mb-3" to={`warranties/${this.props.warranty._id}`} >Details</Link>
                    <button onClick={() => { this.props.handleDelete(this.props.uid, this.props.warranty._id) }} className="ml-3 btn btn-danger btn-sm mb-3">delete</button>
                </div> 
            </div>
        )
    }
}

export default Warranty;