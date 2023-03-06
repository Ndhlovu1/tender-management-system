import React from 'react'
import "./topbar.css" 
import logo from '../assets/logo.png'
import {Nav} from "react-bootstrap";

export default function Topbar() {
  return (
    <>
    <Nav>
    <div className="top">
        <div className="topLeft">
            <img 
            className="topLogo"
            src={ logo } alt="logo"/>
        </div>

        <div className="topCenter">
            <ul className='topListCenter'>
                <li>
                    <h3 className="topListItem1">My Dashboard</h3>
                    <p className="topListP">Welcome John, access your app insights here </p>
                </li>
                               
                
            </ul>
        </div>
        <div className="topRight">
            <i class="topPersonIcon fas fa-solid fa-user fa-3x"></i>
            <p className="topListTag">John Mwangi</p></div>

    </div>
    </Nav>

    </>
  )
}




