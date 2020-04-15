import React from 'react'

class Warranty extends React.Component {
    render() {
        return (
            <div className="col">
                <h5>{this.props.warranty.name}</h5>
                <p>{this.props.warranty.brand}</p>
                <p>{this.props.warranty.warrantyLength}</p>
            </div>
        )
    }
}

export default Warranty;