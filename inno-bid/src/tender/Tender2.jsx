import React from 'react'
import "./tender.css"
import oil from '../assets/oil.jpeg'
import { Link } from 'react-router-dom'

export default function Tender() {
  return (
    <div className='singleTender' >
      <img 
        className="tenderImage"
        src={ oil } 
        alt="insurance"/>

      {/* Info on Person/Company Issueing the tender */}
      <Link to="/Oil-Tender" >
        <span className="tenderName">
          Applications of Oil Refinery Services
        </span>
      </Link>  

      {/* Area, Issuer, Bid and Save */}

      <div className="tenderInfo">
        <div className="tenderCategories">
          <span className="tenderCategory">
            Sector : Natural Resources
          </span>
          <br/>
          <span className="tenderType">
            Area : Zambezi Region
          </span>
          <br/>
        <span className="tenderType">
            Issuer : Ministry of Agriculture and Forestry
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
