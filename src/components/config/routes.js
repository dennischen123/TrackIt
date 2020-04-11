import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/auth/Register/Register';
import Login from '../components/auth/login/login';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route 
                path="/warranties"
                render= {
                    () => props.user ? <WarrantyContainer /> : <Redirect to="/login" />
                }
            />
            <Route 
                path='/register'
                render={
                    () => props.user ? 
                            <Redirect to="/warranties" /> 
                        : 
                            <Register register={ props.register } />
                }
            />
            <Route 
                path='/login'
                render={
                    () => props.user ? 
                            <Redirect to="/warranties" />
                        :
                            <Login login={props.login} />
                }
            />
        </Switch>
    )
}