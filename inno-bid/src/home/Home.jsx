import React from 'react'
import Topbar from "../topbar/Topbar"
import Dashboard from "../dashboard/Dashboard";
import "./home.css"
import Sidebar2 from '../sidebar/Sidebar2';

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className='home'>
      <Sidebar2 />
      <Dashboard/>
        

    </div>
    </>
  )
}
