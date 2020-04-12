import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return(
            <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/IMG_0081.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Amit Bhadoria</a></h1>
              <span className="email"><a href="mailto:amitsinghbhadoria788@gmail.com" target="_blank" rel="noopener noreferrer">amitsinghbhadoria788@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{ marginBottom: '5em', marginTop:'1em'}}>
              <div id="navbar" className="collapse">
                <ul>
                  	<li className="active"><a href="#home" data-nav-section="home">Home</a></li>
					<li><a href="#about" data-nav-section="about">About</a></li>
					<li><a href="#services" data-nav-section="services">Services</a></li>
					<li><a href="#skills" data-nav-section="skills">Skills</a></li>
					<li><a href="#experience" data-nav-section="experience">Experience</a></li>
					<li><a href="#work" data-nav-section="work">Work</a></li>
					{/* <li><a href="#contact" data-nav-section="contact">Contact</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul style={{    display: 'flex',justifyContent: 'space-evenly'}}>
                <li><a href="https://www.linkedin.com/in/amit-singh-bhadoria-3b67278b" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/AmitSinghBhadoria" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-clip"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              B-303 Sai shanti society, loni kalbhor <br></br> pune -412201, Maharashtra, India
              </small></p>
              <p><small>
                  +91 6260131975, 
                +91 7769985525
              </small></p>
            </div>
          </aside>
          </div>
        )
    }
}