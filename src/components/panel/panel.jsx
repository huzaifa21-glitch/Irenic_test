import React from 'react';
import './panel.css'; 
import Logo from '../../assets/gpt-svgs/Logo-green.svg';
import Chat from '../../assets/gpt-svgs/Chat.svg';
import Sub from '../../assets/gpt-svgs/subs.svg';
import Explore from '../../assets/gpt-svgs/explore.svg';
import Settings from '../../assets/gpt-svgs/Settings.svg';
import Logout from '../../assets/gpt-svgs/Logout.svg';
import DarkIcon from '../../assets/gpt-svgs/Dark.svg';
import { user } from '../../data/dummy'

const Panel = () => {
    return (
        <div className="panel-container">
            <div className="logo-container">
                <img src={Logo} className="logo" alt="React logo" />
            </div>
            <div className="icons-container">

                <img src={Chat} className="user-image" alt="React logo" />
                <img src={Sub} className="user-image" alt="React logo" />
                <img src={Explore} className="user-image" alt="React logo" />
                <img src={Settings} className="user-image" alt="React logo" />

            </div>
            <div className="user-container">
                <img src={user.photo} alt="User" className="user-image" />
                <img src={Logout} className="user-image" alt="React logo" />
                <img src={DarkIcon} className="dark-icon" alt="React logo" />
            </div>
        </div>
    );
}

export default Panel;
