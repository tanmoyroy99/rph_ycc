import react, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './../components/header/Header'
import App from './../components/App';
import UserList from './../components/users/UserList';
import Login from './../components/login/Login'

export default function router(){
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/userlist" component={UserList} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}