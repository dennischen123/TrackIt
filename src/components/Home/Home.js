import React from 'react';
import './Home.css';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                {/* <h2>Home</h2> */}
                {/* <Login /> */}
                {!this.props.uid && (this.props.login || this.props.register) 
                    ? 
                <> 
                    <div className="d-flex justify-content-center align-items-center container mt-5 pt-5">
                        <div className="row mt-5 pt-5">
                            {this.props.login ? <Login login={this.props.login} /> : <Register register={this.props.register}/>}
                        </div>
                    </div>
                </>
                :
                <></>
                }
                {this.props.name && <h1 className="text-center text-white">Welcome {this.props.name.replace(this.props.name[0], this.props.name.charAt(0).toUpperCase())}</h1>}
            </div>
        );
    }
}