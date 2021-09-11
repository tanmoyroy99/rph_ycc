import React, { Component } from 'react';
//import React, { Component } from 'react';
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import { SideNav, Header, HeaderGlobalAction, HeaderMenuButton, HeaderName, HeaderGlobalBar, SkipToContent ,
    SideNavMenu, SideNavMenuItem, SideNavItems, SideNavLink

} from "carbon-components-react/lib/components/UIShell";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import * as carbonIcon from '@carbon/icons-react';
import { Link } from 'react-router-dom';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className="main_container">
                <HeaderContainer
                    render={({ isSideNavExpanded, onClickSideNavExpand }) => {
                        return (
                            <Header aria-label="Jatiya Yuva Computer Shaksharta Mission">
                                <SkipToContent />
                                <HeaderMenuButton
                                    isCollapsible
                                    aria-label="Open menu"
                                    onClick={onClickSideNavExpand}
                                    isActive={isSideNavExpanded}
                                />
                                <HeaderName onClick={() => window.location.hash = {}} prefix="">Jatiya Yuva Computer Shaksharta Mission</HeaderName>
                                <HeaderGlobalBar>
                                <HeaderGlobalAction aria-label="Notification" onClick={() => {}}>
                                        
                                        <Notification20/>
                                    </HeaderGlobalAction>
                                    <HeaderGlobalAction aria-label="Profile" onClick={() => {}}>
                                        <carbonIcon.UserAvatar20/>
                                    </HeaderGlobalAction>
                                </HeaderGlobalBar>
                               

                                <SideNav
                                    aria-label="Side navigation"
                                    isRail
                                    isPersistent={false}
                                    expanded={isSideNavExpanded}>
                                    <SideNavItems>
                                    <SideNavLink renderIcon={carbonIcon.Fade16} href="javascript:void(0)">
                                        <Link to="/" className="item">Home</Link>
                                    </SideNavLink>
                                    <SideNavLink renderIcon={carbonIcon.Fade16} href="javascript:void(0)">
                                        <Link to="/inventoryList" className="item">inventoryList</Link>
                                    </SideNavLink>
                                    <SideNavLink renderIcon={carbonIcon.Fade16} href="javascript:void(0)">
                                        <Link to="/login" className="item">Login</Link>
                                    </SideNavLink>
                                    <SideNavLink renderIcon={carbonIcon.Fade16} href="javascript:void(0)">
                                        Link
                                    </SideNavLink>
                                    </SideNavItems>
                                </SideNav>


                            </Header>
                        )
                    }}
                />
            </div>
        );
    }
}
 
export default header;