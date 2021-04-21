import react, {Component} from 'react';
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
  import { Link } from 'react-router-dom';

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                <h3>Header Component</h3>
                <Header aria-label="IBM Platform Name">
                    <HeaderName href="/home" prefix="TEST>>>">
                        [Platform]
                    </HeaderName>
                    <HeaderNavigation aria-label="IBM [Platform]">
                        <HeaderMenuItem>
                            <Link  className="item">
                                Home
                            </Link>
                        </HeaderMenuItem>
                        <HeaderMenuItem>
                            <Link to="/userlist" className="item">
                                user
                            </Link>
                        </HeaderMenuItem>
                        <HeaderMenuItem>
                            <Link to="/login" className="item">
                            Login
                            </Link>
                        </HeaderMenuItem>
                        <HeaderMenuItem href="/login">Link 2</HeaderMenuItem>
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

export default HeaderComponent;