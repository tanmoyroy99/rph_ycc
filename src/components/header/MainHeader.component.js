import React, { Component } from 'react';
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
  import { BrowserRouter, Link } from 'react-router-dom';

class MainHeaderControl extends Component {
    render() {
        return (
            <div className="mainHeader">
            <Header aria-label="IBM Platform Name">
                <HeaderName href="/home" prefix="TEST>>>">
                    [Platform]
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                    <HeaderMenuItem>
                        <Link to="/home" className="item">
                            Home
                        </Link>
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        <Link to="/user" className="item">
                            user
                        </Link>
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        <Link to="/Login" className="item">
                        Login
                        </Link>
                    </HeaderMenuItem>
                    <HeaderMenuItem href="/Login">Link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                    <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                    <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                    </HeaderMenu>
                        <HeaderMenuItem>
                        
                        </HeaderMenuItem>
                </HeaderNavigation>
            </Header>
            </div>
        )
    }
}

export default MainHeaderControl;