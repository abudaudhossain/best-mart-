import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import TopNav from '../TopNav/TopNav';
import "./Navigation.css";

const Navigation = () => {
    return (
        <div style={{background: "#161880", color: "white"}}>
         <TopNav/>  
         <MenuBar/> 
        </div>
    );
};

export default Navigation;