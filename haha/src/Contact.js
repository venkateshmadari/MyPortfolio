import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import img2 from "../src/asserts/img2.jpeg"

function Contact() {
    const imageRef = useRef(null);

    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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
        <div className="contact">
            <div className="study">
                <h1 ref={textRef}
                    style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 2s' }} >Let's Connect !</h1>
                <div  >
                    <img src={img2} alt="naruto" ref={imageRef} style={{ transform: 'scale(0)' }} />
                </div>
                <div className="line"  ref={textRef}
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 2s' }}></div>
            </div>
            <div className='tag' ref={textRef}
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 3s' }} >
                <p className="smallText">I'm always looking to make new connections, so drop me an
                    email or shoot me a DM on " X ". Who knows where the
                    conversation could lead?
                    <br />
                    <br />
                    Let's explore the possibilities and see where it takes us!
                </p>
            </div>

            {/* email box  */}




        </div>
    )
}

export default Contact;



