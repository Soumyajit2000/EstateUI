import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/TopNav.css';
import {FaBars} from 'react-icons/fa';
import {useState} from "react";
import logo from"./../logohouse.png";

const TopNav = () => {
    const menuData = [
       
        {
            path:'/Homme',
            name: "Home"
        },
        {
            path:'/about',
            name: "About"
        },
        {
            path:'/contact',
            name: "contact"
        },
        
        {
            path:'/LOGOUT',
            name: "profile"
        },
        {
            path:'/Login',
            name: "UserLogin"
        },
        {
            path:'/AdminLogin',
            name: "AdminLogin"
        },
        {
            path:'/AdminModal'
        },
        

    ]
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    return (
        <nav>
            
            <label  className="logo1">
                <img src={logo} width={100} height={68} alt='logo' />REMS </label>
            <div className="bars">
                <FaBars onClick={toggle}/>
            </div>
            <div className="menu" style={{left: isOpen ? "-100%" : "0"}}>
                {
                    menuData.map((item)=>(
                        <NavLink to={item.path} key={item.name}>
                            <div className="list_item">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    );
};

export default TopNav;