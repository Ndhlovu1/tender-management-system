import React from 'react'
import "./topbar.css" 
import logo from '../assets/logo.png'
import {Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <>
    <Nav>
    <div className="top">
        <Link to="Dashboard/">
        <div className="topLeft">
            <img 
            className="topLogo"
            src={ logo } alt="logo"/>
        </div>
        </Link>

        <div className="topCenter">
            <ul className='topListCenter'>
                <li>
                    <h3 className="topListItem1">TENDERS</h3>
                    <p className="topListP">View all available tender offers here </p>
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




