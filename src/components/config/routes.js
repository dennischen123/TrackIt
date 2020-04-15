import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import Home from '../components/Home/Home';
import Home from '../Home/Home'
// import Register from '../components/auth/Register/Register';
// import Login from '../components/auth/login/login';
import Register from '../auth/Register/Register';
import Login from '../auth/Login/Login'
import Locker from '../../components/Locker/Locker'
// import WarrantyContainer from '../../containers/WarrantyContainer/WarrantyContainer'
// import AdditionalContainer from '../../containers/AdditionalContainer/AdditionalContainer'

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route 
                path="/locker"
                render= {
                    () => props.uid ? <Locker uid={ props.uid } /> : <Redirect to="/login" />
                }
            />
            <Route 
                path='/register'
                render={
                    () => props.uid ? 
                            <Redirect to="/home" /> 
                        : 
                            <Register register={ props.register } />
                }
            />
            <Route 
                path='/login'
                render={
                    () => props.uid ? 
                            <Redirect to="/home" />
                        :
                            <Login login={props.login} />
                }
            />
        </Switch>
    )
}

export default Routes;