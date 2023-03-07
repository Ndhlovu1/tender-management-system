import React from 'react'
import "./tender.css"

export default function Tender() {
  return (
    <div className='singleTender' >
      <img 
        className="tenderImage"
        src="" alt="image"/>

        {/* Info on Person/Company Issueing the tender */}
      <span className="tenderName">Provision of Short-Tem Insurance Brokerage Services</span>

      {/* Area, Issuer, Bid and Save */}

      <div className="tenderInfo">
        <div className="tenderCategories">
          <span className="tenderCategory">
            Sector : Insurance
          </span>
        </div>

        <hr/>
        {/* The details about the contract */}
        <span className="tenderType">
            Area : Khomas Region
          </span>
        <span className="tenderType">
            Issuer : Khomas City Council
          </span>
        <span className="tenderType">
            Dates : 01 Jan 2023 - 01 April 2023
          </span>



     


      </div>

      
    </div>
  )
}
