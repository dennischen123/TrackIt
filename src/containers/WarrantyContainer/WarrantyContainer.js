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
                <p>6 items</p>
                {/* <div className="bg-light ml-3 mr-3">+</div> */}
                <AddWarrantyModal addWarrantyClicked={this.addWarrantyClicked} addWarrantyStatus={this.state.addWarrantyStatus} />
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
