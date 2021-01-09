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

class MainHeaderControl extends Component {
    render() {
        return (
            <div className="mainHeader">
            <Header aria-label="IBM Platform Name">
                <HeaderName href="#" prefix="TEST">
                    [Platform]
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                    <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                    <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                    <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                    </HeaderMenu>
                </HeaderNavigation>
            </Header>
            </div>
        )
    }
}

export default MainHeaderControl;