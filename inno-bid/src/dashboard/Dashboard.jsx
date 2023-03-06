import React from 'react'
import "./dashboard.css"
// import {Button,Card,Form, Container, Row, Col} from "react-bootstrap";
 

export default function Dashboard() {
  return (
    <>
   
    <div className='dashboard'>
      <div className="dashInfo">
        <i class="dashIcon fas fa-home"></i>
        <br/> <br/> 
        <span className="itemTitle">DASHBOARD</span>
        <br/>
        <span className="itemInfo">
          See relevant insights about avaliable tenders
        </span>

      </div>

      <div className="dashInfo">
        <i class="dashIcon fas fa-layer-group"></i>
        <br/> <br/> 
        <span className="itemTitle">TENDERS</span>
        <br/>
        <span className="itemInfo">
          See relevant insights about avaliable tenders
        </span>

      </div>

      <div className="dashInfo">
        <i class="dashIcon fas fa-clock"></i>
        <br/> <br/> 
        <span className="itemTitle">TENDER HISTORY</span>
        <br/>
        <span className="itemInfo">
          See relevant insights about avaliable tenders
        </span>

      </div>
      {/* Below are the dashboard pointers */}
      <div className="dashInfo">
      <i class="dashIcon fas fa-home"></i>
      <br/> <br/> 
        <span className="itemTitle">RESOURCE CENTER</span>
        <br/>
        <span className="itemInfo">
          See relevant insights about avaliable tenders
        </span>

      </div> 
      
      {/* Below are the dashboard pointers */}
      <div className="dashInfo">
        <i class="dashIcon fas fa-bell-exclamation"></i>
        <br/> <br/> 
        <span className="itemTitle">NOTIFICATIONS</span>
        <br/>
        <span className="itemInfo">
          See relevant insights about avaliable tenders
        </span>

      </div>
      {/* Below are the dashboard pointers */}
      <div className="dashInfo">
        <i class="dashIcon fas fa-home"></i>
        <br/> <br/> 
        <span className="itemTitle">DASHBOARD</span>
        <br/>
        <span className="itemInfo">
          See relevant insights about avaliable tenders
        </span>

      </div>
    

    

        
      

    </div>
    </>
  )
}
