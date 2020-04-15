import React from 'react'
import warrantyAPI from '../../api/warrantyAPI';

class Warranty extends React.Component {
    // state = {
    //     wid: '',
    //     uid: '',
    // }

    handleDelete(uid, wid) {
        warrantyAPI.destroy(uid, wid)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // componentDidMount () {
    //     this.setState({
    //         wid: this.props.warranty._id,
    //         uid: this.props.uid
    //     })
    // }

    render() {
        return (
            <div className="col">
                <h5>{this.props.warranty.name}</h5>
                <p>{this.props.warranty.brand}</p>
                <p>{this.props.warranty.warrantyLength}</p>
                <button onClick={() => {this.props.handleDelete(this.props.uid, this.props.warranty._id)}} className="btn btn-danger btn-sm">delete</button>
            </div>
        )
    }
}

export default Warranty;