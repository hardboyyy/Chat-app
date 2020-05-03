import React from 'react';

import closeIcon from './closeIcon.png'
import onlineIcon from './onlineIcon.png'
import './InfoBar.css'

const InfoBar = ({ room }) => (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="" className="onlineIcon"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"> <img src={closeIcon} alt="" className="closeIcon"/> </a>
            </div>
        </div>
    )

export default InfoBar;