import React, { Component } from 'react';
//import React, { Component } from 'react';
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import { SideNav, Header, HeaderGlobalAction, HeaderMenuButton, HeaderName, HeaderGlobalBar, SkipToContent } from "carbon-components-react/lib/components/UIShell";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import User20 from "@carbon/icons-react/lib/user--avatar/20";
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
                        window.addEventListener(
                            'resize',
                            () => {
                                const viewportWidth =
                                    window.innerWidth || document.documentElement.clientWidth;
                                if (viewportWidth > 1056) {
                                    if (isSideNavExpanded === true) onClickSideNavExpand();
                                }
                            },
                            false
                        );
                        return (
                            <Header aria-label="Privacy Information Management System" onClick={isSideNavExpanded === true ? onClickSideNavExpand : null}>
                                <SkipToContent />
                                <HeaderMenuButton
                                    aria-label="Open menu"
                                    onClick={onClickSideNavExpand}
                                    isActive={isSideNavExpanded}
                                />
                                <HeaderName onClick={() => window.location.hash = {}} prefix="">Privacy Information Management System</HeaderName>
                                <HeaderGlobalBar>
                                <HeaderGlobalAction aria-label="Notification" onClick={() => {}}>
                                        
                                        <Notification20/>
                                    </HeaderGlobalAction>
                                    <HeaderGlobalAction aria-label="Profile" onClick={() => {}}>
                                        {/* <img src={`${this.props.user_avatar}`} className='profile-photo' alt={this.props.user_avatar} /> */}
                                        <User20/>
                                    </HeaderGlobalAction>
                                </HeaderGlobalBar>
                               
                            </Header>
                        )
                    }}
                />
            </div>
        );
    }
}
 
export default header;