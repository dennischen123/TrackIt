import React from 'react';
import warrantyAPI from '../../api/warrantyAPI';
import Warranty from '../../components/Warranty/Warranty';
import './WarrantyContainer.css'
import AddWarrantyModal from '../../components/AddWarrantyModal/AddWarrantyModal';

export default class WarrantyContainer extends React.Component {
    state = {
        warranties : [],
        addWarrantyStatus: false,
    }

    componentDidMount() {
        warrantyAPI.index(this.props.uid)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        warranties: res.data
                    })
                }
            })
            .catch(err => console.log(err))
    }
    addWarrantyClicked = () => {
        this.setState({
            addWarrantyStatus: this.state.addWarrantyStatus ? false : true
        })
    }

    handleAddWarranty = (body) => {
        warrantyAPI.create(this.props.uid,body)
            .then(res => {
                this.setState({
                    warranties: res.data.warranties
                })
            })
            .catch(err => console.log(err))
    }

    handleDelete = (uid, wid) => {
        // console.log(this.state.warranties)
        warrantyAPI.destroy(uid, wid)
            .then(res => this.setState({
                warranties: this.state.warranties.filter(warranty => warranty._id !== wid)
            }))
            .catch(err => console.log(err))
    }

    render() {
        let warranties = this.state.warranties;
        return (
            <div className="WarrantyContainer border border-dark text-center">
                <h4>Warranties</h4>
                {this.state.warranties ? <p>{this.state.warranties.length} items</p> : <p>0 items</p>}
                <AddWarrantyModal handleAddWarranty={this.handleAddWarranty} addWarrantyClicked={this.addWarrantyClicked} addWarrantyStatus={this.state.addWarrantyStatus} />
                <button onClick={this.addWarrantyClicked} className="btn btn-secondary btn-block">+</button>
                <div className="container warranties row row-cols-1">
                    {
                        warranties && warranties.map(warranty => {
                            return <Warranty handleDelete={this.handleDelete} warranty={warranty} key={warranty._id} uid={this.props.uid}/>
                        })
                    }
                </div>
                
            </div>
        );
    }
}
