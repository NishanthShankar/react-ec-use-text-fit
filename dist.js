import{useState as c,useEffect as o}from"react";const t=(s,a,e={})=>{const[t,h]=c(e.t||14);o(()=>{try{const c=a.current.getBoundingClientRect()||{};const o=(c.width||0)*(c.height||0);const n=e.o||e.t||14;const r=e.h||e.t||140;const t=Math.min(Math.max(Math.sqrt(o/s.length),n),r);h(t)}catch{}},[a.current,s.length,e.o,e.h]);return t};export default t;
