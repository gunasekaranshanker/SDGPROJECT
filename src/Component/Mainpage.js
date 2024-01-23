import React from 'react'
import { Link } from 'react-scroll'

export default function Mainpage() {
  return (
    <div className='mhead'>
      <div className='head1'>
        <img src="https://img.freepik.com/premium-vector/fresh-water-logo-template-design_20029-949.jpg?w=740" style={{ height: "100px", width: "100px", marginTop: "-20px" }} />
        <span style={{ color: "green", fontFamily: "sans-serif", fontSize: "40px" }} className='pt-5'>Fresh <span style={{color:"blue"}}>Water</span></span>
      </div>
      <span className='header '>

          <Link to="Home" smooth={true} duration={300}>
            <h4 className='aa p-3'>Home</h4>
          </Link>
          <Link to="Education" smooth={true} duration={300} >
            <h4 className='aa p-3'>Education</h4>
          </Link>
          <Link to="Program" smooth={true} duration={300} >
            <h4 className='aa p-3'>Program</h4>
          </Link>
          <Link to="Contact" smooth={true} duration={300}  >
            <h4 className='aa p-3'>Contact</h4>
          </Link>
          <Link to='SignIn' smooth={true} duration={300}>
          <h3 className='aa bg-primary  mt-3 m-4 btn text-light'>SignIn</h3>
          </Link>

          
        
          
            
          
        </span>
    </div>
  )
}

