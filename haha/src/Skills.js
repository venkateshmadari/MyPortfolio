import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import your images
import rasengan from "../src/asserts/sharingan.png";
import html from '../src/asserts/htmll.png';
import css from '../src/asserts/css.png';
import js from '../src/asserts/js.jpeg';
import react from '../src/asserts/react.png';
import c from '../src/asserts/c.png';
import cpp from '../src/asserts/cpp.png';
import mongodb from '../src/asserts/MongoDB.png';
import mysql from '../src/asserts/sql.png';
import tailwind from '../src/asserts/njs.png';
import github from '../src/asserts/GithubLogo.png';

const Skills = () => {
 
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
        const anime = document.querySelectorAll('.png');

        tl.set(anime, { autoAlpha: 0, y: 100 });

        // Animation
        tl.to(anime, { autoAlpha: 1, y: 0, duration: 3, stagger: 2 });

        ScrollTrigger.create({
          animation: tl,
          trigger: '.logos',
          start: 'top 80%', 
          end: 'bottom 80%', 
          scrub: true 
        });
      }, []);

    return (
        <>
            <div className='mainSkills' id='haha'>
                <div className="rasengan">
                    <img src={rasengan} alt="rasengan" className='rotate' />
                    <h1 className='ski'>Skills</h1>
                </div>
                <p className='smallLine' >Skills I utilize to effectively complete tasks</p>
                <div className="line">.</div>
            </div>
            <div className="logos">
                <div className="png">
                    <img src={html} alt="HTML5" />
                    <p className="logo_text" id="html">HTML5</p>
                </div>
                <div className="png">
                    <img src={css} alt="CSS" />
                    <p className="logo_text" id="css">CSS</p>
                </div>
                <div className="png">
                    <img src={js} alt="JavaScript" />
                    <p className="logo_text" id="javascript">JavaScript</p>
                </div>
                <div className="png">
                    <img src={react} alt="React" />
                    <p className="logo_text" id="react">React</p>
                </div>
                <div className="png">
                    <img src={mongodb} alt="MongoDB" />
                    <p className="logo_text" id="mongo">MongoDB</p>
                </div>
                <div className="png">
                    <img src={tailwind} alt="Node.js" />
                    <p className="logo_text" id="twind">Node.js</p>
                </div>
                <div className="png">
                    <img src={mysql} alt="MySQL" />
                    <p className="logo_text" id="sql">MySQL</p>
                </div>
                <div className="png">
                    <img src={github} alt="Github" />
                    <p className="logo_text" id="git">Github</p>
                </div>
                <div className="png">
                    <img src={c} alt="C" />
                    <p className="logo_text" id="c">C</p>
                </div>
                <div className="png">
                    <img src={cpp} alt="C++" />
                    <p className="logo_text" id="cpp">C++</p>
                </div>
            </div>
        </>
    );
}

export default Skills;
