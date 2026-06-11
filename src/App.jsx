import "./index.css"
import React, { useEffect, useState, useRef } from 'react'
import Canvas from "./Canvas"
import data from "./data.js"

// locomotive scroll for smooth scrolling...
import LocomotiveScroll from "locomotive-scroll"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const App=()=>{
  const [showCanvas,setShowCanvas]=useState(false);
  const [theme,setTheme]=useState("light"); 
  const headingref=useRef(null);
  const scrollRef=useRef(null);
  const growingspan=useRef(null);
  useEffect(()=>{
    scrollRef.current=new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
    });
    
    return () => {
      if (scrollRef.current) scrollRef.current.destroy();
    }
  },[]);

  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.destroy();
        scrollRef.current = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true
        });
      }, 50);
    }
  }, [showCanvas]);

  useEffect(() => {
    if (theme === "light") {
      gsap.to("body", {
        color: "#fff",
        backgroundColor: "#000",
        duration: 0.3,
        ease: "power2.out",
      });
    } else if (theme === "dark") {
      gsap.to("body", {
        color: "#000",
        backgroundColor: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [theme]);
  
  const handleClick=(e)=>{
    const isShowing = !showCanvas;

    if (isShowing) {
      setShowCanvas(true);

      gsap.set(growingspan.current, {
        top: e.clientY,
        left: e.clientX,
        scale: 0,
      });

      gsap.to("body", {
        color: "#000",
        duration: 0.25,
        ease: "power2.out",
      });

      gsap.to(growingspan.current, {
        scale: 500,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set("body", {
            backgroundColor: "#fd2c2a",
          });
          gsap.set(growingspan.current, {
            scale: 0,
            clearProps: "all",
          });
        },
      });
    } else {
      setShowCanvas(false);
      const targetBg = theme === "dark" ? "#fff" : "#000";
      const targetColor = theme === "dark" ? "#000" : "#fff";
      
      gsap.to("body", {
        color: targetColor,
        backgroundColor: targetBg,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
  <>
    
    <span ref={growingspan} 
      className="growing block fixed w-5 h-5 bg-[rgb(253,44,42)] rounded-full scale-0 pointer-events-none z-[99]"
      style={{
        transformOrigin: 'center',
        willChange: 'transform'
      }}
    ></span>
    <div data-scroll-container className="w-full relative z-[1]"
    >
      <div className="w-full relative h-screen font-[Helvetica_Now_Display]">

        {showCanvas && data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets}></Canvas>
        ))}
    
        <div className="w-full h-screen  relative z-[10]">
          <nav className="w-full p-8 flex justify-between z-50 items-center">
            <div className="flex items-center gap-6">
              <div className="brand text-2xl font-regular">Thirtysixstudios</div>
              <div onClick={toggleTheme} className="w-16 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-between px-1.5 relative cursor-pointer select-none">
                <div className={`absolute w-6 h-6 bg-white rounded-full top-0.5 transition-all duration-300 ease-out left-0.5 ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}`}></div>
                <span className="text-sm z-10">🌙</span>
                <span className="text-sm z-10">☀️</span>
              </div>
            </div>
            <div className="links flex gap-10">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a key={index} href={`#${link.toLowerCase()}`} className="text-med hover:text-gray-300">
                  {link}
                </a>
              ))}
            </div>
          </nav>
          
          <div className="textcontainer px-[20%] w-full">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h3>
              <p className="text-md w-[80%] mt-10 font-md">
                We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
              </p>
              <p className="text-md mt-10">Scroll</p>
            </div>
          </div>

          <div className="relative w-full h-[40%] overflow-visible b-0 l-0 mt-17 z-[20]">
            {showCanvas && data[8].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets}></Canvas>
            ))}
            <div className="w-full absolute bottom-0 left-0">
              <h1 ref={headingref} onClick={handleClick} className="text-[16rem] font-normal tracking-tight leading-none pl-5 cursor-pointer select-none relative z-[30]">
                Thirtysixstudio
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen mt-65 px-10 relative z-[10]">
        {showCanvas && data[2].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets}></Canvas>
        ))}
        <h1 className="text-8xl relative z-[20]">About the Brand</h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light relative z-[20]">
          we are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional...
        </p>
        <div className="flex">
        <img className="w-[35%] p-20 mt-10 m-30 z-[10]" src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400" />
        <p className="m-20 mt-40 w-[30%]">This platform was built from scratch using React, crafted with custom CSS layouts, and brought to life through advanced GSAP timeline animations. By integrating Locomotive Scroll, I focused on creating a seamless, physics-based scrolling journey that bridges the gap between clean engineering and immersive digital art. Every transition, theme toggle, and interaction was designed to keep the experience responsive, fast, and visually engaging.</p>
        </div>
        {showCanvas && data[8].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets}></Canvas>
        ))}
      </div>

      <footer className="w-full p-10 flex flex-col ml-30 md:flex-row justify-between items-center border-t border-white/10 relative z-[10] mt-40 font-[Helvetica_Now_Display]">
        <div className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Thirtysixstudios. All rights reserved.
        </div>
        <div className="mr-70 text-sm flex items-center gap-1 mt-4 md:mt-0 select-none">
          Made with ♡ by Aastha Bhatia
        </div>
      </footer>
    </div>
  </>
);

}
export default App;