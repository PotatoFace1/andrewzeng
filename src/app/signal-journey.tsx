"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PROJECT_PAGES, PROJECT_SLUG_ORDER } from "@/content/project-pages";

const W = 1600;
// Periodic frequency modulation: both phase and slope meet at the seam.
const phase = (x: number) => 16*Math.PI*x/W - 4*Math.sin(2*Math.PI*x/W);
const y = (x: number, delay = 0) => 195 - 64*Math.sin(phase(x)-delay);
const path = (delay = 0) => Array.from({length:Math.ceil((W*3+2400)/3)+1}, (_,i) => `${i ? 'L' : 'M'}${i*3-1200},${y(i*3-1200,delay).toFixed(3)}`).join(' ');
const nodes = PROJECT_SLUG_ORDER.map((slug,i) => {
  const p = Math.PI/2+i*3*Math.PI;
  let low=0, high=W;
  for(let step=0;step<48;step++) {
    const mid=(low+high)/2;
    if(phase(mid)<p) low=mid; else high=mid;
  }
  const x=(low+high)/2;
  return {...PROJECT_PAGES[slug],x:Number(x.toFixed(3)),y:Number(y(x).toFixed(3)),above:i%2===0};
});
const repeatedNodes = [0,1,2].flatMap(cycle => nodes.map((node,index) => ({...node,x:node.x+cycle*W,index,cycle})));
const names = ['FMCW radar','Lunabotics','Electric go-kart','RC car','Fuel cell'];

export default function SignalJourney() {
  const rail = useRef<HTMLDivElement>(null);
  const returnTrace = useRef<SVGPathElement>(null);
  const drag = useRef<{x:number;start:number;moved:boolean}|null>(null);
  
  const [active,setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const slide = useRef<{frame:number;target:number}|null>(null);
  const selected = useRef(0);
  function stopSlide() {
    if(slide.current) cancelAnimationFrame(slide.current.frame);
    slide.current=null;
  }
  useEffect(()=>()=>stopSlide(),[]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previous = 0;
    const start = performance.now();
    const draw = (now:number) => {
      if(now-previous>40 && !document.hidden) {
        returnTrace.current?.setAttribute('d',path(.65+(now-start)*.0003));
        previous=now;
      }
      frame=requestAnimationFrame(draw);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      if(!preference.matches) frame=requestAnimationFrame(draw);
      else returnTrace.current?.setAttribute('d',path(.65));
    };
    sync();
    preference.addEventListener('change',sync);
    return () => {cancelAnimationFrame(frame);preference.removeEventListener('change',sync);};
  },[]);
  useEffect(() => {
    const el = rail.current!;
    el.scrollLeft = W;
    const wheel = (e:WheelEvent) => {
      stopSlide();
      if(e.ctrlKey || Math.abs(e.deltaX)>Math.abs(e.deltaY)) return;
      const delta = e.deltaY*(e.deltaMode===1?24:e.deltaMode===2?el.clientWidth:1);
      if((delta>0 && el.scrollLeft<el.scrollWidth-el.clientWidth-1)||(delta<0 && el.scrollLeft>0)) {e.preventDefault();el.scrollLeft+=delta;}
    };
    el.addEventListener('wheel',wheel,{passive:false});
    return () => el.removeEventListener('wheel',wheel);
  },[]);
  function go(i:number) {
    const el=rail.current!;
    const origin = track.current!.getBoundingClientRect().left-el.getBoundingClientRect().left+el.scrollLeft;
    const position=slide.current?.target ?? el.scrollLeft;
    const center = position+el.clientWidth/2-origin;
    const cycle = Math.floor(center/W)+(i<0?-1:i>=nodes.length?1:0);
    const index = ((i%nodes.length)+nodes.length)%nodes.length;
    const target=origin+cycle*W+nodes[index].x-el.clientWidth/2;
    stopSlide();
    selected.current=index;
    setActive(index);
    const initial=el.scrollLeft;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.scrollLeft=target;
      return;
    }
    const start=performance.now();
    const tick=(now:number)=>{
      const t=Math.min(1,(now-start)/550);
      const eased=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
      el.scrollLeft=initial+(target-initial)*eased;
      if(t<1) slide.current={frame:requestAnimationFrame(tick),target};
      else {
        slide.current=null;
        // Rebase by one identical copy after the visible slide completes.
        const c=el.clientWidth/2-(track.current!.getBoundingClientRect().left-el.getBoundingClientRect().left);
        if(c<W) el.scrollLeft+=W;
        else if(c>=2*W) el.scrollLeft-=W;
      }
    };
    slide.current={frame:requestAnimationFrame(tick),target};
  }
  return <main className="signal-home">
    <header className="signal-header"><Link className="signal-wordmark" href="/">Andrew Zeng<span className="signal-dot"/></Link><nav aria-label="Main navigation"><Link href="/projects">Projects</Link><a href="/Zeng%20Resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a><Link href="/contact">Contact</Link></nav></header>
    <section className="signal-intro"><div><p className="signal-eyebrow">Electrical engineering × computer science</p><h1>Hi, I’m Andrew.</h1><p>Electrical Engineering × Computer Science. Currently building <a className="signal-robotics" href="https://tsquaredrobotics.us" target="_blank" rel="noopener noreferrer">t<sup>2</sup> Robotics ↗</a></p></div><div className="signal-affiliation"><span>Northeastern University</span><a href="https://opentrons.com" target="_blank" rel="noopener noreferrer">Co-op @ Opentrons Labworks ↗</a><span className="signal-location">New York, NY</span></div></section>
    <section className="signal-experience" aria-label="Explore projects along an FMCW wave">
      <div className="signal-caption"><span><i/> 01 — A timeline of my work</span><span>Scroll · drag · explore →</span></div>
      <div ref={rail} className="signal-viewport" role="region" tabIndex={0} aria-label="Horizontal project wave. Scroll, drag, or use arrow keys. Tab to project links."
        onScroll={() => {
          if(slide.current) return;
          const el=rail.current!;
          let c=el.clientWidth/2-(track.current!.getBoundingClientRect().left-el.getBoundingClientRect().left);
          if(c<W) {el.scrollLeft+=W;c+=W;if(drag.current)drag.current.start+=W;}
          else if(c>=W*2) {el.scrollLeft-=W;c-=W;if(drag.current)drag.current.start-=W;}
          const nearest=repeatedNodes.reduce((best,n)=>Math.abs(n.x-c)<Math.abs(best.x-c)?n:best,repeatedNodes[0]);
          selected.current=nearest.index;
          setActive(nearest.index);
        }}
        onKeyDown={e=>{if(e.target===e.currentTarget && ['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();go(selected.current+(e.key==='ArrowRight'?1:-1));}}}
        onPointerDown={e=>{stopSlide();if(e.pointerType==='mouse' && e.button===0 && !(e.target as HTMLElement).closest('a'))drag.current={x:e.clientX,start:e.currentTarget.scrollLeft,moved:false};}}
        onPointerMove={e=>{const d=drag.current;if(d && Math.abs(e.clientX-d.x)>5){d.moved=true;e.currentTarget.setPointerCapture(e.pointerId);e.currentTarget.scrollLeft=d.start-(e.clientX-d.x);}}}
        onPointerUp={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);setTimeout(()=>{drag.current=null;},0);}}
        onPointerCancel={()=>{drag.current=null;}}
        onClickCapture={e=>{if(drag.current?.moved){e.preventDefault();e.stopPropagation();}}}>
        <div ref={track} className="signal-track" style={{width:W*3,height:390}}>
          <svg className="signal-art" viewBox={`0 0 ${W*3} 390`} aria-hidden="true">
            <path ref={returnTrace} d={path(.65)} fill="none" stroke="#b77e63" strokeWidth="1.4" opacity=".8"/><path d={path()} fill="none" stroke="#a299bf" strokeWidth="2"/>
            {repeatedNodes.map((n)=><g key={`${n.slug}-${n.cycle}`}><line x1={n.x} x2={n.x} y1={n.y} y2={n.y+(n.above?-43:43)} stroke="#655a78"/><circle cx={n.x} cy={n.y} r="17" fill="#111016" stroke="#665777"/><circle cx={n.x} cy={n.y} r="5" fill={n.index===active?'#d39876':'#a299bf'}/></g>)}
          </svg>
          {repeatedNodes.map((n)=><Link key={`${n.slug}-${n.cycle}`} href={`/projects/${n.slug}`} className={`signal-node ${n.above?'above':'below'}`} style={{left:n.x,top:n.y}} aria-label={`Open ${n.title}`} >
            <span className="signal-node-hit"/><span className="signal-node-label"><span className="signal-node-number">0{n.index+1}</span><span className="signal-node-title">{names[n.index]} <span>↗</span></span></span>
            <span className="signal-preview">{n.thumbnailSrc && <Image src={n.thumbnailSrc} alt="" width={200} height={100} draggable={false}/>}<span>{n.oneLiner}</span></span>
          </Link>)}
        </div>
      </div>
    </section>
  </main>;
}




