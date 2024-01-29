import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
         <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
        <div className='footer d-flex justify-content-evenly align-items-center mt-5'>
          <div className='website' style={{ width: "400px",color:"white" }}>
            <h5 style={{color:"white"}}> <i class="fa-solid fa-bowl-food me-3" style={{color:"white"}}></i>Food Circle</h5>
            <p style={{ textAlign: "justify", color: "white" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur reiciendis fuga accusamus nihil laboriosam
              sapiente tempora quos aspernatur debitis sint corrupti, numquam beatae, at, itaque doloremque est excepturi voluptate possimus
            </p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4 style={{color:"white"}}>Links</h4>
            <Link to='/' style={{ color: "white", textDecoration: "none" }}>Home page</Link>
          
          </div>
          <div className='guides d-flex flex-column ms-5 '>
            <h4 style={{color:"black"}}>Guids</h4>
            <Link to='https://react.dev/' target='_blank' style={{ color: "white", textDecoration: "none" }}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ color: "white", textDecoration: "none" }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ color: "white", textDecoration: "none" }}>Boots Watch</Link>
          </div>
          <div className='contactus  ms-5 '>
            <h4 style={{ color: "white" }}>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='enter your email' />
              <button className='btn btn-warning ms-3' >subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-atems-center mt-3'>
              <Link ><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-facebook fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
              <Link > <i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-5 text-center' >Copyright &copy; 2024 Restaurant. Built with react</p></>
    )
}

export default Footer