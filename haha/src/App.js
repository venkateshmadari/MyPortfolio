import React, {  useEffect } from 'react';
import gsap from "gsap";


import './App.css';
import video from '../src/asserts/itachi.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import More from './More';
import Skills from './Skills';
import Project from './Project';
import Education from './Education';
import Contact from './Contact';
import Email from './Email';


function App() {
     

  useEffect(() => {
    
    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    // Animation targets
    const mainText = document.querySelector('.main_text');
    const navLinks = document.querySelectorAll('.nav a');
    const icons = document.querySelectorAll('.icons_links a');
    
    // Hide the elements initially
    tl.set(mainText, { autoAlpha: 0 })
      .set(navLinks, { autoAlpha: 0 })
      .set(icons, { autoAlpha: 0 });

    // Animation
    tl.to(mainText, { autoAlpha: 1, duration: 1, delay: 5 })
      .to(navLinks, { autoAlpha: 1, duration: 1, stagger: 0.5 }, "-=0.5")
      .to(icons, { autoAlpha: 1, duration: 1, stagger: 0.2 }, "-=0.5");

  }, []);

  const navbardetails = {
    name: "Portfolio",
    Firstheading: 'Projects',
    secondHeading: 'About',
    ThirdHeading: 'Skills',
    FourthHeading: 'Contact',
  };
  const mainSection = {
    FirstName: "Madari Venkatesh",
    bio: "Developer &  Designer"
  }
  return (
    <div className="App">
      <video src={video} autoPlay muted  loop />
      <nav className="nav" >
        <a href="#" className="nav__brand" >{navbardetails.name}</a>
        <div className='icons_links'>
          <a href='https://github.com/venkateshmadari' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href='https://x.com/MadariVenk4216?t=vDqrOms2TKYGMuxuHreIOQ&s=09' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href='https://www.linkedin.com/in/venkateshmadari/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </nav>

      <section>
        <div className='main_text'>
          <h1 className='split'> {mainSection.FirstName} </h1>
          <h1 className='bio'> {mainSection.bio} </h1>
        </div>
      </section>
      <More/>
      <Skills/>
      <Project/>
      <Education/>

      <Contact/>
      <Email/>
    </div>
  );
}

export default App;
