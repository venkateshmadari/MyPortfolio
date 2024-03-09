import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import book from "../src/asserts/book.png"
import calculator from "../src/asserts/calculator.png"
import website from "../src/asserts/website.png"
import carrot from "../src/asserts/carrot.png"
import ques from "../src/asserts/ques.png"
import star from "../src/asserts/hotstar.png"
function Project() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
    const anime = document.querySelectorAll('.cards');

    tl.set(anime, { autoAlpha: 0, y: 100 });

    // Animation
    tl.to(anime, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.5 });

    ScrollTrigger.create({
      animation: tl,
      trigger: '.cards_container', // Adjust trigger selector
      start: 'top 80%', 
      end: 'bottom 80%', 
      scrub: true 
    });
  }, []);
  return (
    <div className="project">
      <div className="projectss">
        <h1 className="project_heading">Projects</h1>
        <p className="smallLine">some of the notable projects i have worked on</p>
        <div className='line'>.</div>
      </div>
      <div className="cards_container">
        <div className="cards" >
          <a href="https://github.com/venkateshmadari/API-project1.git" target='_blank' rel="noreferrer">
            <img src={book} alt="book" target="_blank" />
          </a>
          <h2>API Project</h2>
          <p>Book managment api project</p>
        </div>
        <div className="cards">
          <a href="https://github.com/venkateshmadari/Calculator.git" rel="noreferrer">
            <img src={calculator} alt="book" target="_blank" />
          </a>
          <h2>React Calculator</h2>
          <p>Calculator created using react</p>
        </div>
        <div className="cards">
          <a href="https://github.com/venkateshmadari/ETA.git" rel="noreferrer">
            <img src={website} alt="book" target="_blank" />
          </a>
          <h2>Community Website</h2>
          <p> Demo of community website</p>
        </div>
        <div className="cards">
          <a href="https://github.com/venkateshmadari/Frequently-Asked-Question.git" rel="noreferrer">
            <img src={ques} alt="book" target="_blank"  />
          </a>
          <h2>FAQ Generator</h2>
          <p>Random FAQ Generator</p>
        </div>
        <div className="cards">
          <a href="https://github.com/venkateshmadari/24carrot.com.git"rel="noreferrer"><img src={carrot} alt="book"  target="_blank" />
          </a>
          <h2>24 carrot.com</h2>
          <p>Home page clone</p>
        </div>
        <div className="cards">
          <a href="https://github.com/venkateshmadari/hotstarlandingpage.git" rel="noreferrer"><img src={star} alt="book" target="_blank" />
          </a>
          <h2>Hotstar clone</h2>
          <p>Clone of Hotstar home page</p>
        </div>
      </div>
    </div>
  )
}

export default Project