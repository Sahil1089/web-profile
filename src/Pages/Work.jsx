import React from 'react'
import { company } from '../assets/data'
import Nav from '../component/Nav'
import Social from '../component/Social'

function Work() {
  return (
<>
    <div className='work_experiance profile'>
      {
        company.map((i)=>(
          <div className='work'>
            <h5 className='c1'>{i.comp1.name}</h5>

            <label className='c3'>Post : {i.comp1.post}</label>

            <ul>
              {i.comp1.work.map((exp)=>(
                <li>{exp}</li>
              ))}
            </ul>




            </div>
        ))
      }
<div className="social">
<Social/></div>

      
    </div>
    <Nav/>

    </>
  )
}



export default Work