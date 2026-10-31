import React, {useEffect, useState} from 'react';
import {useReducedMotion} from 'framer-motion';
import {ChevronLeft, ChevronRight, Pause, Play} from 'lucide-react';
import first from './optimized/banners/1.webp';
import second from './optimized/banners/2.webp';
import third from './optimized/banners/3.webp';

const slides = [
  {src:first, width:1882,height:836, alt:'Tasmiya Trends — Timeless Salwar Trends. Tradition in every thread.'},
  {src:second, width:1882,height:836, alt:'Tasmiya Trends — Modest by Design. Timeless abayas for every occasion.'},
  {src:third, width:1882,height:836, alt:'Tasmiya Trends — Grace in Every Detail. Timeless ethnic wear for modern women.'},
];

export default function HeroSlider(){
  const reduced = useReducedMotion();
  const [index,setIndex] = useState(0);
  const [paused,setPaused] = useState(false);
  const [hovered,setHovered] = useState(false);
  const [focused,setFocused] = useState(false);
  useEffect(()=>{
    if(paused || hovered || focused || reduced) return;
    const timer = setInterval(()=>setIndex(i=>(i+1)%slides.length),5500);
    return ()=>clearInterval(timer);
  },[paused,hovered,focused,reduced,index]);
  const move = direction => setIndex(i=>(i+direction+slides.length)%slides.length);
  return <section className="hero-slider" aria-label="Tasmiya Trends collections" aria-roledescription="carousel"
    onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
    onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}
    onKeyDown={e=>{if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}if(e.key==='ArrowRight'){e.preventDefault();move(1)}}}>
    <div className="hero-slide-stack">
      {slides.map((slide,i)=><div key={slide.src} className={`hero-slide ${i===index?'is-active':''}`} aria-hidden={i!==index} role="group" aria-roledescription="slide" aria-label={`${i+1} of ${slides.length}`}>
        <img src={slide.src} width={slide.width} height={slide.height} alt={slide.alt} fetchPriority={i===0?'high':'auto'} decoding="async"/>
      </div>)}
    </div>
    <button className="slider-arrow slider-prev" aria-label="Previous banner" onClick={()=>move(-1)}><ChevronLeft size={20}/></button>
    <button className="slider-arrow slider-next" aria-label="Next banner" onClick={()=>move(1)}><ChevronRight size={20}/></button>
    <div className="slider-controls"><div className="slider-dots" aria-label="Choose banner">{slides.map((slide,i)=><button key={slide.src} aria-label={`Show banner ${i+1}`} aria-pressed={i===index} className={i===index?'is-active':''} onClick={()=>setIndex(i)}/>)}</div>
      {!reduced&&<button className="slider-pause" aria-label={paused?'Play slideshow':'Pause slideshow'} onClick={()=>setPaused(p=>!p)}>{paused?<Play size={13}/>:<Pause size={13}/>}</button>}
    </div>
  </section>;
}
