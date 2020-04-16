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
                delete res.data[0].image;
                this.setState({
                    warranty: res.data[0]
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        !this.state.warranty && this.getWarranty()
        return (
            <div className="container">
                <h2>Warranty Details</h2>
                <Form />
                {this.state.warranty && Object.keys(this.state.warranty).map(key => 
                    (key !== '_id') 
                        && 
                    <>
                        <Form.Label>{key}</Form.Label>
                        <Form.Control type="text" size="sm" value={this.state.warranty[key]}/>
                    </>)
                }
            </div>
        );
    }
}
