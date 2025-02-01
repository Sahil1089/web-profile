import React from 'react'
import { Link } from 'react-router-dom';
import { SiPhoenixframework } from "react-icons/si";

import {FaBookReader, FaHome,FaPhoneSquareAlt,FaRegBookmark,FaShare} from 'react-icons/fa';

function Nav() {
  return (
   <>
   
   <div class="nav">
    <ul>
        <li>
            <Link to={'/'}><FaHome/></Link>
        </li>
        <li>
            <Link to={'/education'}><FaBookReader/></Link>
        </li>
        <li>
            <Link to={'/skills'}><FaRegBookmark/></Link>
        </li>
        
        <li>
            <Link to={'/work'}><SiPhoenixframework/></Link>
        </li>
        <li>
            <Link to={'/contact'}><FaPhoneSquareAlt/></Link>
        </li>
        
    </ul>
</div>
   </>
  )
}

export default Nav