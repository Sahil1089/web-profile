import React from 'react'
import Social from '../component/Social'
import Nav from '../component/Nav'

function Education() {
    const cbse="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FTsOXmDB6es1yBxldevd_V4g1WJRXb5sNA&s";
    const bseb="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahQLnOo_b6EH_OoBkvrwvRvuU9ow5_mtDew&s";
const gaya="https://play-lh.googleusercontent.com/T7QJPdvMHpu6EYusv2YMtUKIwxaibHZRGfTTciQuoUm3bjKY7SmMY-ZsBynbCj0U6lUT"
  return (
    <div className='education'>
        <h2>Education <hr /></h2>
       
        <div className="class10  ">
            <h2>class 10th <hr /></h2>
            <img src={cbse} alt="" />
           <ul>
            <li>Board : CBSE</li>
            <li>Medium : English</li>
            <li>Year of Passing : 2020</li>
            <li>Score : 79.6%</li>
           </ul>
        </div>
        <div className="class12 ">
        <h2>class 12th <hr /></h2>

            <img src={bseb} alt="" />
        <ul>
            <li>Board : BSEB</li>
            <li>Medium : English</li>
            <li>Year of Passing : 2022</li>
            <li>Score : 84.4%</li>
           </ul>
        </div>
        <div className="graduation ">
        <h2>graduation <hr /></h2>
        <img src={gaya} alt="" />

        <ul>
            <li>Course : BCOM</li>
            <li>College : Magadh University, Bodh Gaya </li>
            <li>Year of Passing : August 2025(approx)</li>
           </ul>
        </div>
<span>
        <Social/></span>
        <Nav/>
    </div>
  )
}

export default Education