import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import InventoryList from './pages/InventoryList'
import Dashboard from "./components/dashboard/dashboard";
import LoginPage from "./pages/LoginPage";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import './App.scss';
import Header from './components/header/header';

function App() {
  return (
    <div className="main_app_wrapper">
      <HashRouter>
       <Header/>
        <Switch>
          <Route path="/inventoryList" exact component={InventoryList} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </HashRouter>
      <div className="toast-container">
        <ReactNotification />
      </div>
    </div>
  );
}

export default App;
