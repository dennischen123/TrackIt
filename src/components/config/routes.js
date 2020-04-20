import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Home/Home'
import Locker from '../../components/Locker/Locker'
import WarrantyDetails from '../../components/WarrantyDetails/WarrantyDetails'

const Routes = (props) => {
    return (
        <Switch>
            <Route 
                exact path="/"
                render = {
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
                path="/warranties"
                render= {
                    () => <WarrantyDetails uid={props.uid}/>
                }
            />
            <Route 
                path='/register'
                render={
                    () => props.uid ? 
                            <Redirect to="/" /> 
                        : 
                            <Home register={props.register} />
                }
            />
            <Route 
                path='/login'
                render={
                    () => props.uid ? 
                            <Redirect to="/" />
                        :
                            <Home login={props.login} />
                }
            />
        </Switch>
    )
}

export default Routes;