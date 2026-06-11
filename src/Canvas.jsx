import React, { useEffect, useRef, useState } from 'react';
import canvasImages from "./canvasimages.js";
import'./index.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Canvas=({details})=>{ 
  const [index, setIndex]=useState({value:details.startIndex});
  const canvasRef=useRef(null);
  // Keep the random speed stable across the frame animations re-renders
  const scrollSpeed=useRef((Math.random()).toFixed(1));

  useGSAP(()=>{
    gsap.to(index,{
      value:details.startIndex+149,
      duration: details.duration,
      repeat: -1,
      ease: "linear", 
      onUpdate:()=>{
        setIndex({value:Math.round(index.value)});
      }
    })
  gsap.from(canvasRef.current,{
    opacity:0,
    duration:1,
    ease:"power2.inOut",
  });
  })
  // i want to load all the images in the side stack without clicking anything...
  // console.log(canvasImages);
  useEffect(()=>{
    const scale=window.devicePixelRatio;
    const canvas=canvasRef.current;
    // ctx is the drawing tool jiske help se sb kuch draw kr skte hai.. 
    const ctx=canvas.getContext("2d");
    const img=new Image();
    img.src=canvasImages[index.value];
    img.onload=()=>{
      // some are very small and some are very large so we need to scale...
      const scale=window.devicePixelRatio;
      canvas.width=canvas.offsetWidth*scale;
      canvas.height=canvas.offsetHeight*scale;
      canvas.style.width=canvas.offsetWidth+"px";
      canvas.style.height=canvas.offsetHeight+"px";
      ctx.scale(scale,scale);
      ctx.drawImage(img,0,0,canvas.offsetWidth,canvas.offsetHeight);
    };
  },[index]);

  return(
    <canvas data-scroll data-scroll-speed={scrollSpeed.current} ref={canvasRef} id="canvas" className='absolute' style={{width:`${details.size}px`, height: `${details.size}px`, top:`${details.top}%`, left:`${details.left}%`, zIndex:`${details.zIndex}`}}></canvas>
  );
};

export default Canvas;