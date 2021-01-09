import React, { Component } from 'react';
import MainHeaderControl from '../header/MainHeader.component'
import UserListControl from '../user/userList.component'

  

class HomeControl extends Component {
    
      
    render() {
        return (
            <div className="event_users_wrap">
                <MainHeaderControl />
                <UserListControl />
            </div>
        )
    }
}

export default HomeControl;
