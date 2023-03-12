import React from 'react'
// import Sidebar from '../sidebar/Sidebar'
import Sidebar2 from '../sidebar/Sidebar2'
import Tenders from '../tenders/Tenders'
import TopbarTender from '../topbar/TopbarTenders'
import "./tenderDisplay.css"

export default function TenderDisplay() {
  return (
    <>
    <TopbarTender/>
    <div className="tenderDisplay">
        <Sidebar2/>
        <Tenders/>
    

      
    </div>
    </>
  )
}
