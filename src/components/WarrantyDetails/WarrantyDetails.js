import React from 'react';
import warrantyAPI from '../../api/warrantyAPI';
import Form from 'react-bootstrap/Form';

export default class WarrantyDetails extends React.Component {
    state = {
        warranty: "",
        wid:'',
        image: '',
    }

    getWarranty = () => {
        let path = window.location.pathname.split('/');
        let id = path[path.length - 1];
        warrantyAPI.show(this.props.uid, id)
            .then(res => {
                let image = res.data[0].image;
                let id = res.data[0]._id;
                delete res.data[0]._id;
                // delete res.data[0].image;
                this.setState({
                    warranty: res.data[0],
                    wid: id,
                    image: image
                })
            })
            .catch(err => console.log(err))
    }

    handleUpdate = () => {
        warrantyAPI.update(this.props.uid, this.state.wid, this.state.warranty)
            .then(res => {
                console.log(res.data)
            })
    }

    //when setState is passed a function instead of object, first argument = prev state
    onChange = ({ target: { name, value } }) =>
        this.setState(prevState => ({
            warranty: { ...prevState.warranty, [name]: value }
        }));

    render() {
        !this.state.warranty && this.getWarranty()
        return (
            <div className="container">
                <h2>Warranty Details</h2>
                {/* <Form /> */}
                <div className="row">
                    <div className="col-7">
                        {this.state.warranty && Object.keys(this.state.warranty).map(key =>
                            (key !== '_id')
                            &&
                            <>
                                <Form.Label>{key}</Form.Label>
                                <Form.Control onChange={this.onChange} type="text" size="sm" name={key} value={this.state.warranty[key]} />
                            </>)
                        }
                        <button onClick={this.handleUpdate} className="btn btn-primary btn-sm mt-3">Update</button>
                    </div>

                {!this.state.image ? 
                        <>
                            {/* <Form.Label>image</Form.Label>
                            <Form.Control onChange={this.onChange} type="text" size="sm" name="image" value={this.state.warranty['image']} />            */}
                        </>
                    :
                        <>
                            <img className="col-5 img-thumbnail" alt="Responsive image" src={this.state.image} ></img>
                        </>
                }
                </div>
                
            </div>
        );
    }
}
