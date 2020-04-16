import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Home/Home'
// import Register from '../auth/Register/Register';
// import Login from '../auth/Login/Login'
import Locker from '../../components/Locker/Locker'

const Routes = (props) => {
    return (
        <Switch>
            {/* <Route exact path='/' component={ Home }/> */}
            <Route 
                exact path="/"
                render = {
                    // () => <Home login={props.login} uid={props.uid} name={props.name}/>
                    () => <Home name={props.name}/>
                }
            />
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
                            <Redirect to="/" /> 
                        : 
                            <Home register={props.register} />
                            // <Register register={ props.register } />
                }
            />
            <Route 
                path='/login'
                render={
                    () => props.uid ? 
                            <Redirect to="/" />
                        :
                            // <Login login={props.login} />
                            <Home login={props.login} />
                }
            />
        </Switch>
    )
}

export default Routes;