import React from 'react'
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
  return (
    <Element style={{backgroundColor:"pink"}} id="Contact">
      <h2 style={{ color: "goldenrod", marginLeft: "650px" }} className='p-4'>Contact Us</h2>
      <div className='row ' style={{marginLeft:"200px"}}>
        <div className='col'>
          
          <div className='ms-5'>
            <FontAwesomeIcon icon={faLocation} style={{ height: "20px", width: "25px" }} className="ms-2" > </FontAwesomeIcon><span className="ms-3" >Coimbatore, Tamilnadu</span>
          </div>
          <div className=' ms-5 mt-3'>
            <FontAwesomeIcon icon={faPhone} style={{ height: "20px", width: "25px" }} className="ms-2" > </FontAwesomeIcon><span className="ms-3" >+91 9677551870</span>
          </div>
          <div className=' ms-5 mt-3'>
            <FontAwesomeIcon icon={faMailReply} style={{ height: "20px", width: "25px" }} className="ms-2"></FontAwesomeIcon><span className="ms-3" >gunasekaran.gbk@gmail.com</span>
          </div>
        </div>
        <div className='col'>
          <div className=' ms-4 mt-3'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/'target='-blank'>
            <FontAwesomeIcon icon={faFacebook} style={{ height: "25px", width: "30px", color:"blue"}} className="ms-2 mt-5" > </FontAwesomeIcon></a>
            <a href="https://twitter.com/?lang=en">
            <FontAwesomeIcon icon={faTwitter} style={{ height: "25px", width: "30px",color:"blue" }} className="ms-4" > </FontAwesomeIcon></a>
            <a href='https://www.instagram.com/'target='-blank'>
            <FontAwesomeIcon icon={faInstagram} style={{ height: "25px", width: "30px",color:"red" }} className="ms-4" > </FontAwesomeIcon></a>
            {/* <FontAwesomeIcon icon={faGithub} style={{ height: "25px", width: "30px",color:"black" }} className="ms-4" > </FontAwesomeIcon> */}
          </div>

        </div>
        
      </div>
      <hr/>
     
    </Element> 
  )
}
