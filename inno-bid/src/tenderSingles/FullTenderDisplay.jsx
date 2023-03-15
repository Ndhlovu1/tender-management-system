import React from 'react'
import "./tenderSingles.css"
import insu from '../assets/insu.jpg'
import { Link } from "react-router-dom"

export default function FullTenderDisplay() {
  return (

    <div className="fullTenderDisplay" >

      <div className="singleTenderWrapper">

        <img  src={ insu } 
              alt="Insurance Logo" 
              className="singleTenderImg" />

        <h1 className="singleTenderTitle">
          Provision of Short-Tem Insurance Brokerage Services
        </h1>

        <div className="singleTenderViewInfo">
          
          <span className="singleTenderViewICategory">
              Sector : Insurance
            </span>

            <span className="singleTenderViewICategoryArea">
              Area : Khomas Region
            </span>

          <span className="singleTenderViewICategoryRegion">
              Issuer : Khomas City Council
          </span>

          <span className="singleTenderViewICategoryDate">
              Dates : 01 Jan 2023 - 01 April 2023
            </span>
        </div>

        <p className='singleTenderDescription'> 
          Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
          The tender notice number is , while the TOT Ref Number is 63276045. 
          Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
          Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
          The tender notice number is , while the TOT Ref Number is 63276045. 
          Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.

          <br/><br/>

          Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
          The tender notice number is , while the TOT Ref Number is 63276045. 
          Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
          Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
          The tender notice number is , while the TOT Ref Number is 63276045. 
          Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.

          <br/><br/>

          Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
          The tender notice number is , while the TOT Ref Number is 63276045. 
          Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
          Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
          The tender notice number is , while the TOT Ref Number is 63276045. 
          Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.
          Namibian Standards Institution has floated a tender for Insurance Services. The project location is Namibia and the tender is closing on 11 Mar 2022. 
          The tender notice number is , while the TOT Ref Number is 63276045. 
          Bidders can have further information about the Tender and can request the complete Tender document by Registering on the site.


        </p>

    
      <button className='applyBtn'>
        <Link to="/" style={{  textDecoration:"none" ,color:"inherit" }}> 
          APPLY 
        </Link>
      </button>

      </div>


    </div>
  )
}
