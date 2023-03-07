import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Tenders from '../tenders/Tenders'
import Topbar from '../topbar/Topbar'
import "./tenderDisplay.css"

export default function TenderDisplay() {
  return (
    <>
    <Topbar/>
    <div className="tenderDisplay">
        <Sidebar/>
        <Tenders/>
    

      
    </div>
    </>
  )
}
