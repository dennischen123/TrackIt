import React from 'react';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
    
    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-dark bg-dark navbar-fixed-top">
                        <Link className="navbar-brand text-white" to="/">TrackIt</Link>
                    <ul className="nav">
                        {
                            (this.props.uid)
                                ? 
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/locker">Locker</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={this.props.logout} className="nav-link text-white" to="/">Logout</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/login">Sign in</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/register">Register</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}
