import React, { useRef, useState } from 'react'
import Nav from '../component/Nav';
import Social from '../component/Social';
import emailjs from '@emailjs/browser';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaWhatsapp } from 'react-icons/fa'


// function Contact() {

//   const form = useRef();
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [text,setText]=useState("")

//     // service of email
    
//        const to_name="Mukesh Kumar"
//        const from_name=name
//        const to_email="sahil809241@gmail.com"
//        const from_email="email"
//        const YOUR_SERVICE_ID="service_vrm2hyi"
//        const YOUR_TEMPLATE_ID="template_cdh01e9"
//        const  YOUR_PUBLIC_KEY="tKN5TJHEzqe2cSaHM"
//        const  message=text
  
    


//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID,
//           form.current,
//           {
//           publicKey: YOUR_PUBLIC_KEY,
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     };
  
    
//   return (<>
//     <div className='contact'>
//         <h1>Contact Me!</h1>
//         <form ref={form} onSubmit={sendEmail}>
//             <div>
//                 <input type="text" 
//                  value={name} 
//                  placeholder='name'
//                 onChange={(e)=>setName(e.target.value)}
                 
//                  />

// <input type="email" 
//                  value={email} 
//                  placeholder='enter your email'
//                 onChange={(e)=>setEmail(e.target.value)}
                 
//                  />
//             </div>

//             <textarea name="textarea" id="ta" value={text}
//             onChange={(e)=>setText(e.target.value)}
//             />
// <button type='submit'>send Message</button>
//         </form>

//         
    

//     </div>
    
//    
//     </>
//   )
// }

function Contact(){
  return(
    <>

  <div className="contactme">
  <div className='c3 heading'>Contact Me!!</div>


   <span> <FaPhoneAlt/>  : +91-6205043270
   </span>

   <span> <MdEmail/> mukeshmuku2007@gmail.com</span>
   
  <div className="media">  <div >
          <ul className='social-media'>
              <li className='c1'>
          
                 <a  href="https://www.instagram.com/the_mukesh11/profilecard/?igsh=MTFiZ2Z5c3YwOHVydA==" className='a1'><FaInstagram/></a>
              </li>
              <li>
                 <a href='https://www.lhttps://www.snapchat.com/add/the_mukesh6205?share_id=-OUPmg_ZRys&locale=en-USnkedin.com/in/mukesh-kumar' className='a2'><FaSnapchat/></a>
              </li>
              <li>
                 <a href='https://www.facebook.com/share/19dq3FDssk/' className='a3'><FaFacebook/></a>
              </li>
              <li>
                 <a className='a4' href='https://www.linkedin.com/in/mukesh-kumar-20300223b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
  '><FaLinkedin/></a>
              </li>
  
          </ul>
      </div></div>
  </div>
  <Nav/>
</>)
}
export default Contact