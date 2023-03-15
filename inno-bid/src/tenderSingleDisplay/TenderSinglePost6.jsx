import React from 'react'
import Topbar from '../topbar/TopbarTenders'
import "./tenderSingleDisplay.css"
import FullTenderDisplay from "../tenderSingles/FullTenderDisplay6"
import Sidebar2 from "../sidebar/Sidebar2"

export default function TenderSinglePost() {
  return (
    <>
    <Topbar/>
    <div className="singleTenderPostDisplay">
      
      <Sidebar2/>
      <FullTenderDisplay/>

    </div>

    </>
  )
}
