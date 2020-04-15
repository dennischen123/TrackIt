import React from 'react';
import { Form, Button } from 'react-bootstrap'

export default class Register extends React.Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.props.register(user)
    }

    render() {
        return (
            <div className="Register">
                <h2>Register</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            onChange={this.handleChange}
                            type="text" 
                            placeholder="Enter name"
                            name="name"
                            value={this.state.name}
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            onChange={this.handleChange}
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={this.state.password}
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}