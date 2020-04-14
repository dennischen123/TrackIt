import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import Home from '../components/Home/Home';
import Home from '../Home/Home'
// import Register from '../components/auth/Register/Register';
// import Login from '../components/auth/login/login';
import Register from '../auth/Register/Register';
import Login from '../auth/Login/Login'
import WarrantyContainer from '../../containers/WarrantyContainer/WarrantyContainer'
import AdditionalContainer from '../../containers/AdditionalContainer/AdditionalContainer'

const Routes = (props) => {
    return (
        <Switch>
            {/* <Route exact path='/' component={ Home }/> */}
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

export default Routes;