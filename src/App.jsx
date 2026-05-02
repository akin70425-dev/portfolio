
import { useState } from 'react'

import {FaWhatsapp,FaPhoneAlt,FaGithub,FaInstagram} from "react-icons/fa"


function App() {
  let [open, setopen] = useState(false);
  let projects=[
    {
      image:"netclone.png",
      title:"Netflix clone",
      link:"https://neclone.netlify.app/",
      glink:"https://github.com/akin70425-dev/newone",
    }
  ];
  

  function toggleMenu() {
    setopen(!open);
  }
  return (

   <>
  <div className="container-fluid hero">
    <div className="row py-3 align-items-center">
      <div className="col-12 col-lg-7 d-flex justify-content-between align-items-center">
      <img src="por-logo-removebg-preview.png" alt="" height={50} width={50} className='ms-3'/>

        <button
          className="btn btn-light d-lg-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <div className={`col-12 col-lg-5  ${open ? "d-block" : "d-none"} d-lg-flex justify-content-center `}>
        <ul className="d-flex flex-column flex-lg-row align-items-lg-center list-unstyled m-0 mt-3 ms-3 mt-lg-0">
          <li className="me-lg-5 mb-2 mb-lg-0">Home</li>
          <li className="me-lg-5 mb-2 mb-lg-0">Project</li>
          <li className="me-lg-5 mb-2 mb-lg-0">about</li>
          <li className=" mb-2 mb-lg-0">contact</li>
        </ul>
      </div>
      <div className='row' >
        <div className='col-lg-8 col-md-8 col-7 ms-4  hero-con'>
<p style={{marginTop:open?"36px":"180px"}}>Hey,I'm a</p>
<h2>Web <br /><span>Developer</span></h2>
</div>
<div className='col-lg-3 col-md-3 col-5 ms-4  hero-con2'>
<p id='pp'style={{marginTop:open?"66px":"210px"}}>Designing digital experiences that feel effortless.</p>
<p id="pp2">Web Developer specializing in modern, high-performance interfaces.</p>
</div>
</div>
    </div>
    <div className="row spec ms-3 me-3 gy-3 mt-3" >
      <div className="col-lg-3 col-md-3 col-4 ">
        <p>#01</p>
        <p>Web design</p>
      </div>
       <div className="col-lg-3 col-md-3 col-4">
        <p>#02</p>
        <p>Responsive websites</p>
      </div>
       <div className="col-lg-3 col-md-3 col-4">
        <p>#03</p>
        <p>Web application</p>
      </div>
       <div className="col-lg-3 col-md-3 col-4">
        <p>#04</p>
        <p>Business websites</p>
      </div>
    </div>
  </div>


  <div className="project-page pt-5 pb-5 ">
      <h1 className='ms-5'>Projects</h1>
      <div className="container-fulied ms-5 me-5  mt-4">
  <div className="row gx-4">
    {
      projects.map((project)=>{
        return <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card shadow cards">
        
        <img src={project.image} className="card-img-top" alt="Netflix Clone"  />

        <div className="card-body text-center">
          <h5 className="card-title">{project.title}</h5>

          <div className="d-flex justify-content-between mt-3 p-btn">
            <a href={project.link} className="btn btn-light w-50 me-2" target="_blank">
              Preview
            </a>

            <a href={project.glink} className="btn btn-dark w-50 " target="_blank">
              GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
      })
    }
    

  </div>
</div>  
    </div>

   <section className=" container-fulied glass-about pt-5 pb-5">
      <div className="row ms-3 me-3">
       
        <div className="col-lg-6 col-md-6 col-12 glass-card  mt-5 mb-5">
          <h2>About me</h2>
        <p>
          I'm a React Developer with an MCA degree, focused on building fast,
          interactive, and visually appealing web applications.
        </p>
        <p>
          I love clean UI, smooth animations, and creating seamless user experiences.
        </p>
        <div className="row gy-5">
          <div className="col-12">
            <h2 className=' text-center'>Tools</h2>
          </div>
         <div className="col-4">
  <img src="html.png" className="tool-img delay1" />
</div>

<div className="col-4">
  <img src="css-3.png" className="tool-img delay2" />
</div>

<div className="col-4">
  <img src="bootstrap.png" className="tool-img delay3" />
</div>

<div className="col-4">
  <img src="java-script.png" className="tool-img delay4" />
</div>

<div className="col-4">
  <img src="physics.png" className="tool-img delay5" />
</div>

<div className="col-4">
  <img src="Firebase.png" className="tool-img delay6" />
</div>
        </div>
        </div>
         <div className="col-lg-6 col-md-6 col-12 pt-3">
          <img src="about-Photoroom.png" className='img' alt="" width={600} height={810}/>
        </div>
      </div>
    </section>


    <footer className="footer-container-fulied ">
      <div className="glass-footer">
        <div className="row">
          <div className="col-5">
            <h1 className="tagline">
          Let's <br /> work <br />together
        </h1>
          </div>
        
            <div className="col-4 footer-links">
              <h2>Quick link</h2>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        
          </div>
          <div className="col-3 mt-3 read">
            <h2>Read me</h2>
            <a href="" target="_blank" class="btn btn-danger" >
  View Resume
</a>
          </div>
        </div>
        
        

        <div className="social-icons">
          <a href="#"> <FaWhatsapp className='whatsapp'/></a>
          <a href="#"><FaPhoneAlt className=" phone" /></a>
          <a href="#"><FaGithub className=" github" /></a>
          <a href="#"><FaInstagram className=" instagram" /></a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Akin. All rights reserved.
        </p>

      </div>
    </footer>
</>

    
  )
}

export default App