import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


export default class AddWarrantyModal extends React.Component {
    state = {
        // addModalStatus: false,
        // title: "",
        // content: "",
    }

    addModalClicked = () => {
        this.setState({
            addModalStatus: this.state.addModalStatus ? false : true,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addPost = () => {
    }

    render() {
        return (
            <div>
                {this.props.addWarrantyStatus && <>
                    <Modal show={this.props.addWarrantyStatus} onHide={this.props.addWarrantyClicked}>
                        <Modal.Header>
                            <Modal.Title>Add Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        id="postTitle"
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Brand/Model</Form.Label>
                                    <Form.Control
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter brand/model"
                                        name="brand"
                                        value={this.state.brand}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Purchase Date</Form.Label>
                                    <Form.Control
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter purchaseDate"
                                        name="purchaseDate"
                                        value={this.state.purchaseDate}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Warranty Length</Form.Label>
                                    <Form.Control
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter warrantyLength"
                                        name="warrantyLength"
                                        value={this.state.warrantyLength}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Serial Number</Form.Label>
                                    <Form.Control
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter serialNumber"
                                        name="serialNumber"
                                        value={this.state.serialNumber}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Receipt Photo</Form.Label>
                                    <Form.Control
                                        id="postContent"
                                        type="text"
                                        placeholder="upload photo"
                                        name="photo"
                                        value={this.state.photo}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control
                                        id="postContent"
                                        type="text"
                                        placeholder="Enter comments"
                                        name="comments"
                                        value={this.state.comments}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="primary"
                                onClick={this.addPost} >
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