import React from 'react'
import Social from '../component/Social'
import Nav from '../component/Nav'

function Skill() {
    const img="src/assets/mukesh.jpeg"

  return (
    <>
    <div className='skill'>
        <div className="profile about-me">
  <div className="title">
    <div className="circle"></div>
    <p>mukesh</p>

  </div>
  {/* pic */}
  <div className="img-about">
  <img src={img} alt="" />
  </div>
  {/* about */}
  <div className='abt'>
  <p >Detail-oriented and analytical Accountant with 2 years of experience in financial reporting, 
accounts reconciliation, and tax preparation. Proficient in managing general ledger activities, 
performing audits, and ensuring compliance with accounting standards.</p>
  </div>
{/* download cv */}
</div>
{/* skills */}
<div className="profile skill-set">
  
  <h4>skills
  <hr/></h4>
<ul>
  <li>- MIS Repor</li>
  <li>- Tally Accountin</li>
  <li>- Data Entry
  </li>
  <li>- Bank Reconciliation
  </li>
  <li>- Tender Documentation
  </li>
  <li>- Tender Preparation
  </li>
  <li>- Accounts Payable
  </li>
  <li>- Accounts Receivable
  </li>
  <li>- Petty Cash
  </li>
  <li>- Excel</li>
  <li>- Invoicing</li>
  <li>- TDS Calculation
  </li>
  <li>- GST Filing
  </li>
  <li>- GST Return
  </li>
  <li>- E Way Bill</li>
  <li>-  TDS Filing</li>
  <li>- Financial Analysis
  </li>
</ul>

</div>
<span className='margin'><Social/></span>


    </div><Nav/>

    </>
  )
}

export default Skill