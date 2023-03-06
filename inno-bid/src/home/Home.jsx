import React from 'react'
import Topbar from "../topbar/Topbar"
import Sidebar from '../sidebar/Sidebar'
import Dashboard from "../dashboard/Dashboard";
import "./home.css"

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className='home'>
      <Sidebar />
      <Dashboard/>
        

    </div>
    </>
  )
}
