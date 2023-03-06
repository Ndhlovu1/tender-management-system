import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">

      <ul className="sidebarList">

        {/* <i class="fas fa-home">Home</i>
        <i class="fas fa-layer-group">Tenders</i>
        <i class="fas fa-clock">Tender History</i>
        <i class="fad fa-fax">Resource Center</i>
        <i class="fas fa-comment-alt-exclamation">Notifications</i>
        */}

        <li className="sidebarListItem">
          <i class="nameSideBar fa-sharp fa-solid fa-circle-info fa-2x"></i>
        </li>
        <li className='nameSideBar'>HELP</li>

        <li>
          <i class="nameSideBar sidebarListItem fa-sharp fa-solid fa-comments fa-2x">
          </i>
          <li className='nameSideBar'> FEEDBACK</li>

        </li>
        
        <li>
          <i class="nameSideBar sidebarListItem fa-solid fa-gear fa-2x"></i>
          <li className='nameSideBar'> SETTINGS</li>
        </li>
       </ul>

      <button className='signOutBtn' >SIGN OUT</button>

       <ul className='sidebarListNames'>

       </ul>

    </div>
  )
}





