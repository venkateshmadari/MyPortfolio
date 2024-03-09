import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import eyes from '../src/asserts/eyes.jpeg'
import './App.css'; // Import CSS file for styling

function More() {

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    if (inView && !isVisible) {
        setIsVisible(true);
    }
    const imageRef = useRef(null);
    const textRef = useRef(null);



    useEffect(() => {
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
            <p className='smallText' ref={textRef}
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 3s' }} >Who am i ? </p>
            <div ref={ref} id='haha' className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <img src={eyes} alt=" eyes" />
                <h1 className='skill' id='text' ref={textRef}
                    style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 3s' }}>Developer & Designer</h1>
                <div className='line' ref={textRef}
                    style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 3s' }}>.</div>
            </div>
            <p className='smallText js-splittext-lines' id='frontend' ref={textRef}
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 4s' }}>A Front-End Engineer & Designer that takes great pleasure in conceptualizing and bringing to life visually stunning products. I am always eager to broaden my horizons and acquire new skills that will allow me to do my work more efficiently.</p>
            <div className="buttonText">
                <button ref={textRef} className='buttoning'
                    style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 4s' }}>
                    <a href="mailto:venkateshmadari07@gmail.com">
                        Connect With Me
                    </a>
                </button>
            </div>
        </>
    );
}

export default More;
