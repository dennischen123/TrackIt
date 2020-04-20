import React from "react";
import imageAPI from "../../api/imageAPI";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormData from 'form-data';
import myState from '../../utils/myState';
import "bootstrap/dist/css/bootstrap.min.css";

export default class AddWarrantyModal extends React.Component {
    state = {
        name: "",
        brand: "",
        purchaseDate: "",
        warrantyLength: "",
        serialNumber: "",
        photo: "",
        comments: ""
    }

    getInitialState = () => ({
        name: "",
        brand: "",
        purchaseDate: "",
        warrantyLength: "",
        serialNumber: "",
        photo: "",
        comments: ""
    })

    resetState = () => {
        this.setState(this.getInitialState());
    }

    addModalClicked = () => {
        this.setState({
            addModalStatus: this.state.addModalStatus ? false : true,
        })
    }

    handleChange = (event) => {
        if (event.target.name === 'photo'){
            const files = event.target.files
            files[0].uid = this.props.uid;
            const formData = new FormData()
            formData.append('photo', files[0])
            formData.append('uid', this.props.uid)
            this.setState({
                [event.target.name]: formData
            })
        }else { 
            this.setState({
                [event.target.name]: event.target.value
            })
        }

    }

    handleAddWarranty = () => {
        let warranty = {
            name: this.state.name,
            brand: this.state.brand,
            purchaseDate: this.state.purchaseDate,
            warrantyLength: this.state.warrantyLength,
            serialNumber: this.state.serialNumber,
            photo: this.state.photo,
            comments: this.state.comments
        }
        if (warranty.photo)
            this.props.handleAddWarranty(warranty, this.handleUpload)
        else
            this.props.handleAddWarranty(warranty)
        this.resetState();
        this.props.addWarrantyClicked();
    }

    handleOnHide = () => {
        this.setState(this.getInitialState);
        this.props.addWarrantyClicked();
    }

    handleUpload = () => {
        imageAPI.create(this.props.uid, myState.get('wid'), this.state.photo)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.props.addWarrantyStatus && <>
                    <Modal show={this.props.addWarrantyStatus} onHide={this.handleOnHide}>
                        <Modal.Header>
                            <Modal.Title>Add Warranty</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name *</Form.Label>
                                    <Form.Control
                                        id="formcheck-api-regular"
                                        size="sm"
                                        id="postTitle"
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Brand/Model *</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter brand/model"
                                        name="brand"
                                        value={this.state.brand}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Serial Number *</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter serialNumber"
                                        name="serialNumber"
                                        value={this.state.serialNumber}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Purchase Date</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        id="postContent"
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                        name="purchaseDate"
                                        value={this.state.purchaseDate}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Warranty Length</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter warrantyLength"
                                        name="warrantyLength"
                                        value={this.state.warrantyLength}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter comments"
                                        name="comments"
                                        value={this.state.comments}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <div className="form-group">
                                    <input className="form-control-file" type="file" accept="image/*" name="photo" onChange={this.handleChange}/>
                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="primary"
                                onClick={this.handleAddWarranty} >
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                }
            </div>
        )
    }
}