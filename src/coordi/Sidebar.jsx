import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaExclamationCircle,
    FaShoppingBag,
    FaBell,
    FaServer,
    FaThList
}from "react-icons/fa";
import { MdBuild ,MdHomeRepairService,MdEngineering} from 'react-icons/md';
import { GiVendingMachine } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/coord/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/coord/client",
            name:"Clients",
            icon:<FaUserAlt/>
        },
        {
            path:"/coord/equipement",
            name:"Equiepements",
            icon:<FaServer/>
        },
        {
            path:"/coord/reclamation",
            name:"Réclamation",
            icon:<FaBell />

        },
        {
            path:"/coord/technicien",
            name:"Techniciens",
            icon:<MdEngineering/>
        },
        {
            path:"/coord/interv",
            name:"Intervention",
            icon:<MdHomeRepairService/>
        }
    ]
    return (
        <div className="container-fluid custom-container">
            <div className="row">
                <div style={{width: isOpen ? "200px" : "70px"}} className="col-5 sidebar">
                    <div className="top_section">
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Coord</h1>
                        <div style={{marginLeft: isOpen ? "60px" : "0px"}} className="bars">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                    <ul className="nav flex-column">
                        {
                            menuItem.map((item, index)=>(
                                <li className="nav-item" key={index}>
                                    <NavLink to={item.path} className="nav-link">
                                        <div className="icon">{item.icon}</div>
                                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-10">{children}</div>
            </div>
        </div>
    );
};

export default Sidebar;
