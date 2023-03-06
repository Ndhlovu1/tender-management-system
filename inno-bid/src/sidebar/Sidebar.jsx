import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">

      <ul className="sidebarList">

        {/* <i class="fas fa-home">Home</i>
        <i class="far fa-layer-group">Tenders</i>
        <i class="fas fa-clock">Tender History</i>
        <i class="fad fa-fax">Resource Center</i>
        <i class="fas fa-comment-alt-exclamation">Notifications</i>
        */}

        <i class="fa-sharp fa-solid fa-circle-info">Help</i>
        <i class="fa-sharp fa-solid fa-comments">Feedback</i>
        <i class="fa-solid fa-gear">Settings</i>

       </ul>

     
    </div>
  )
}





