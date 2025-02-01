import React from 'react'
import {} from 'react-icons'

import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaWhatsapp } from 'react-icons/fa'
function Social() {
  return (
    <div >
        <ul className='social-media'>
            <li>
        
               <a href="https://www.instagram.com/the_mukesh11/profilecard/?igsh=MTFiZ2Z5c3YwOHVydA=="><FaInstagram/></a>
            </li>
            <li>
               <a href='https://www.lhttps://www.snapchat.com/add/the_mukesh6205?share_id=-OUPmg_ZRys&locale=en-USnkedin.com/in/mukesh-kumar'><FaSnapchat/></a>
            </li>
            <li>
               <a href='https://www.facebook.com/share/19dq3FDssk/'><FaFacebook/></a>
            </li>
            <li>
               <a href='https://www.linkedin.com/in/mukesh-kumar-20300223b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
'><FaLinkedin/></a>
            </li>

        </ul>
    </div>
  )
}

export default Social