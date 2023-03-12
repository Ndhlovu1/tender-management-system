import React from 'react'
import "./tender.css"
// // import insu from '../assets/insu.jpg'
// import oil from '../assets/oil.jpeg'

// import road from '../assets/road.jpg'
// import tailor from '../assets/tailor.jpg'
// import teaching from '../assets/teaching.jpg'
// import handling from '../assets/handling.jpg'

import fishing from '../assets/fishing.jpg'

// import health from '../assets/health.jpg'


// import { insu ,oil,road, tailor, teaching, handling, fishing, health } from "../assets/"


export default function Tender() {
  return (
    <div className='singleTender' >
      <img 
        className="tenderImage"
        src={ fishing } 
        alt="insurance"/>

        {/* Info on Person/Company Issueing the tender */}
      <span className="tenderName">Request of Marine Life Capture Services</span>

      {/* Area, Issuer, Bid and Save */}

      <div className="tenderInfo">
        <div className="tenderCategories">
          <span className="tenderCategory">
            Sector : Wildlife and Tourism
          </span>
          <br/>
          <span className="tenderType">
            Area : Khomas Region
          </span>
          <br/>
        <span className="tenderType">
            Issuer : Ministry of Tourism
          </span>
          <br/>
        <span className="tenderType">
            Dates : 01 Jan 2023 - 01 April 2023
          </span>
        </div>
        {/* The details about the contract */}
      
        <p className="tenderDescription">
        Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        NAMIBIAN STANDARDS INSTITUTION has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.

        NAMIBIAN STANDARDS INSTITUTION has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        NAMIBIAN STANDARDS INSTITUTION has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.

        NAMIBIAN STANDARDS INSTITUTION has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        NAMIBIAN STANDARDS INSTITUTION has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
        NAMIBIAN STANDARDS INSTITUTION has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
        The tender notice number is , while the TOT Ref Number is 63276045. 
        Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.


        </p>


     


      </div>

      
    </div>
  )
}
