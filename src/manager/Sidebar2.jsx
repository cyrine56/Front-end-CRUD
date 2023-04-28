import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaExclamationCircle,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { MdBuild } from 'react-icons/md';
import { GiVendingMachine } from 'react-icons/gi';
import { WarningFilled } from '@ant-design/icons';

import { NavLink } from 'react-router-dom';
import { TbReport } from "react-icons/tb";
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/gest/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/gest/1",
            name:"Clients",
            icon:<FaUserAlt/>
        },
        {
            path:"/gest/alertes",
            name:"Alertes",
            icon:<WarningFilled/>
        },
        {
            path:"/gest/rapports",
            name:"Rapports  ",
            icon:<TbReport />

        },
        {
            path:"/gest/4",
            name:"Techniciens",
            icon:<MdBuild/>
        },
        {
            path:"/gest/5",
            name:"Intervention",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container-fluid custom-container">
            <div className="row">
                <div style={{width: isOpen ? "200px" : "70px"}} className="col-5 sidebar">
                    <div className="top_section">
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Manager</h1>
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
