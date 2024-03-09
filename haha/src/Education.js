import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import bg from "../src/asserts/naruto.jpeg"
import one from "../src/asserts/naruto1.jpeg"
import two from "../src/asserts/naruto2.jpeg"
import three from "../src/asserts/naruto3.jpeg"
import four from "../src/asserts/Naruto7.jpeg"
function Education() {
    const imageRef = useRef(null);

    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const image = imageRef.current;

        if (image) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: image,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,
                },
            });

            tl.to(image, {
                scale: 1,
                transformOrigin: '100% bottom',
                duration: 1,
                ease: 'power4.out',
            });
        }
        const handleScroll = () => {
            const textElement = textRef.current;
            if (textElement) {
                const { top, bottom } = textElement.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (top < windowHeight && bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="education">
                <div className="study">
                    <h1 >Education & Interships</h1>
                    <img ref={imageRef} src={bg} style={{ transform: 'scale(0)' }} alt="naruto" />
                    <p > Place i were learned knowledge and skills</p>
                    <div className="line"></div>
                </div>
                <div className="details">
                    <div className="college" id='child' >
                        <img src={three} alt="" />
                        <div className="div_text">
                            <p>2021-2024</p>
                            <h1>Malla Reddy Engineering College, Hyderabad</h1>
                            <p>Electronics and Communication Engineering</p>
                        </div>
                    </div>
                    <div className="internship" id='child' ref={textRef}
                        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                        <img src={four} alt="" />
                        <div className="div_text">
                            <p>January - June 2021</p>
                            <h1>Central Institute of Tool Design, Hyderabad</h1>
                            <p>Electronics and Communication Engineering</p>
                        </div>
                    </div>
                    <div className="diploma" id='child' >
                        <img src={two} alt="" />
                        <div className="div_text">
                            <p>2018-2021</p>
                            <h1>Govt. Model Residential  Polytechnic, Gajwel</h1>
                            <p>Electronics and Communication Engineering</p>
                        </div>
                    </div>
                    <div className="school" id='child' ref={textRef}
                        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1.5s' }}>

                        <img src={one} alt="" />
                        <div className="div_text">
                            <p>upto 2018</p>
                            <h1>Zilla Parshad High School, Mahabubabad</h1>
                            <p>Secondary School Education</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="naruto">
            </div>
        </>
    )
}

export default Education