import React from 'react'
import Nav from '../component/Nav';
import Social from '../component/Social';
import { useNavigate } from 'react-router-dom';


function Home() {

  const cv = "src/assets/muksesh kumar cv.png"

  const navigate = useNavigate()

  // const img = "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png";
  const img="src/assets/mukesh.jpeg"
  return (
 <>
        
<Nav/>

<div class="profile new-profile">
    <img src={img} alt="img"/>
    <div class="intro">
        <h4>mukesh <br/> kumar</h4>
        <button class="skills" onClick={()=>navigate("/skills")}>Skills</button>
        <button class="experiance" onClick={()=>navigate("/work")}>Experiance</button>
        
    </div>

</div>
{/* about brief */}


<div className="profile about-me  brief">
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
<a href={cv} className="button_cv" download={true} target='_blank'>download cv</a>
</div>


{/* skills overview */}
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
{/* contact me */}
<div class="about profile contact-hm">
  <div className="discription">
    <p>
      demostrated ability to streamline processes, enhance accuracy, and support financial decision-making. Adept at 
using accounting software such as Tally and Advance Excel to maintain accurate records and 
generate insightful financial reports
    </p>
   
  </div>
  {/* social */}
  <span className='new-soc'>
  <Social/>
  </span>
 

  <div className="img">
  <img src={img} alt="img" />
  
  </div>


<button class="about-btn" onClick={()=>navigate("/contact")}>contact me</button>
</div>

<div className="new">
<Social/>
</div>

    </>
  )
}

export default Home