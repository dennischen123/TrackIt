import React from 'react';
import { Form, Button } from 'react-bootstrap'

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("inside handlesubmit")
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(user)
        // .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="Login">
                <h2>Login</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            // type="email" 
                            onChange={this.handleChange}
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
