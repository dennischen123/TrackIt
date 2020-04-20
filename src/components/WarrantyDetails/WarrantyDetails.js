import React from 'react';
import warrantyAPI from '../../api/warrantyAPI';
import Form from 'react-bootstrap/Form';
import { saveAs } from 'file-saver';
import axios from 'axios';
import imageAPI from '../../api/imageAPI'

export default class WarrantyDetails extends React.Component {
    state = {
        warranty: "",
        wid:'',
        photo: '',
    }

    getWarranty = () => {
        let path = window.location.pathname.split('/');
        let id = path[path.length - 1];
        warrantyAPI.show(this.props.uid, id)
            .then(res => {
                let image = '';
                image = res.data[0].image ? new Buffer.from(res.data[0].image.data).toString('base64') : ''
                let id = res.data[0]._id;
                delete res.data[0]._id;
                delete res.data[0].image;
                this.setState({
                    warranty: res.data[0],
                    wid: id,
                    photo: image
                })
            })
            .catch(err => console.log(err))
    }

    handleUpdate = () => {
        warrantyAPI.update(this.props.uid, this.state.wid, this.state.warranty)
            .then(res => {
                if(this.state.photo && typeof(this.state.photo) !== 'string'){
                    imageAPI.create(this.props.uid, this.state.wid, this.state.photo)

                }
            })
    }

    uploadOnChange = (event) => {
        const files = event.target.files
        files[0].uid = this.props.uid;
        const formData = new FormData()
        formData.append('photo', files[0])
        formData.append('uid', this.props.uid)
        this.setState({
            [event.target.name]: formData
        })
    }
    onChange = ({ target: { name, value } }) =>
        this.setState(prevState => ({
            warranty: { ...prevState.warranty, [name]: value }
        }));
    
    handlePdf = () => {
        axios.post('http://localhost:4000/api/create-pdf', this.state.warranty)
            .then(() => axios.get('http://localhost:4000/api/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                saveAs(pdfBlob, `${this.state.warranty.name}-warranty-info.pdf`);
            })
    }

    render() {
        !this.state.warranty && this.getWarranty()
        return (
            <div className="container">
                <h2>Warranty Details</h2>
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
                        {!this.state.photo && 
                            <div className="form-group">
                                <input className="form-control-file" type="file" accept="image/*" name="photo" onChange={this.uploadOnChange} />
                            </div>
                        }
                        
                        <button onClick={this.handleUpdate} className="btn btn-primary btn-sm mt-3">Update</button>
                        <button onClick={this.handlePdf} className="ml-3 btn btn-primary btn-sm mt-3">Download PDF</button>
                    </div>

                {!this.state.photo ? 
                        <>
                        </>
                    :
                        <>
                            <img className="col-5 img-thumbnail" alt="Responsive image" src={`data:image/jpeg;base64,${this.state.photo}`}></img>
                        </>
                }
                </div>
                
            </div>
        );
    }
}
