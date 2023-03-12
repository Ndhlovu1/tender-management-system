import React from 'react'
import "./sidebar2.css"

export default function Sidebar2() {
  return (
    <>
    <div className="sideBar2">
        <div className="sideBarInfo">
            <i class="dashIcon2 fas fa-home"></i>
            <span className="itemTitle1">DASHBOARD</span>
        </div>



        <div className="sideBarInfo">
            <i class="dashIcon2 fas fa-layer-group"></i>
            <span className="itemTitle1">TENDERS</span>
        </div>
        

        <div className="sideBarInfo">
            <i class="dashIcon2 fas fa-clock"></i>
            <span className="itemTitle1">HISTORY</span>
        </div>
        

        <div className="sideBarInfo">
            <i class="dashIcon2 fas fa-fax"></i>
            <span className="itemTitle1">RESOURCES</span>
        </div>
        

        <div className="sideBarInfo">
            <i class="dashIcon2 fas fa-briefcase"></i>
            <span className="itemTitle1">NOTIFICATIONS</span>
        </div>

        {/* Second Sidebar */}

        <div className="sideBarInfo2">
            <i class="dashIconS fa-solid fa-gear"></i>
            <span className="itemTitle2">SETTINGS</span>

            <br/><br/>

            <i class="dashIconS fa-sharp fa-solid fa-circle-info"></i>
            <span className="itemTitle2">HELP</span>

            <br/><br/>

            <i class="dashIconS fa-sharp fa-solid fa-comments"></i>
            <span className="itemTitle2">FEEDBACK</span>


        </div>


    </div>
    </>
  )
}
