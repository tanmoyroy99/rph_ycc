import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Button
} from "carbon-components-react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import './App.scss';

import UserListControl from './components/user/userList.component'
import { BrowserRouter, Route } from 'react-router-dom';
import MainHeaderControl from './container/header.container';
import Home from './container/home.container'
import Login from './container/login.container'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <MainHeaderControl />
        <div className="routerController">
          <Route path="/Login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/user" component={UserListControl} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
