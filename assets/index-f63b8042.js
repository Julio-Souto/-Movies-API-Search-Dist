(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();var w=A;function A(r,e,i){var o=null,t=null,n=function(){o&&(clearTimeout(o),t=null,o=null)},a=function(){var l=t;n(),l&&l()},f=function(){if(!e)return r.apply(this,arguments);var l=this,L=arguments,g=i&&!o;if(n(),t=function(){r.apply(l,L)},o=setTimeout(function(){if(o=null,!g){var T=t;return t=null,T()}},e),g)return t()};return f.cancel=n,f.flush=a,f}const P=`<form id="myForm" class="grid">\r
  <input type="search" name="search" id="search" placeholder="Buscar pelicula...">\r
  <button id="cargar">Cargar</button>\r
</form>\r
<div class="pages grid">\r
  <button id="anterior">Anterior</button>\r
  <p id="totalPages"></p>\r
  <button id="siguiente">Siguiente</button>\r
</div>\r
<div class="grid-movies">\r
  <figure>\r
    <img src="" alt="">\r
    <figcaption><time></time></figcaption>\r
  </figure>\r
</div>`,y=document.querySelector("#app"),I="https://www.omdbapi.com/",B="?apikey=bb557db";let c=null,u=null,d=null,m=null,s=1,p=1,h=I+""+B+"&s=";async function b(){s=1,u.setAttribute("aria-busy",!0);const e=await(await fetch(h+document.getElementById("search").value.trim())).json();e!==null?c.innerHTML=E(e).join(""):c.innerHTML="<p>Error desconocido</p>",u.removeAttribute("aria-busy")}async function v(r){d.setAttribute("aria-busy",!0),anterior.setAttribute("aria-busy",!0);const i=await(await fetch(h+document.getElementById("search").value.trim()+"&page="+r)).json();i!==null?c.innerHTML=E(i).join(""):c.innerHTML="<p>Error desconocido</p>",d.removeAttribute("aria-busy"),anterior.removeAttribute("aria-busy")}function E(r){return r.Response==="True"?(r.totalResults>10&&(p=Math.ceil(Number(r.totalResults)/10)),document.getElementById("totalPages").innerHTML=s+"/"+p,r.Search.map(i=>`<figure>
        <img src="${i.Poster}" alt="${i.Type}">
        <figcaption>${i.Title}<time>${i.Year}</time></figcaption>
      </figure>`)):[`<p>${r.Error}</p>`,`<p>${r.Response}</p>`]}function M(){if(!y)throw new Error("No existe elemento raiz");y.innerHTML=`
    <div class="container">
      <h1>Hello Vite!</h1>
      <div id="peliculas">${P}</div>
    </div>
  `,c=document.querySelector(".grid-movies"),u=document.getElementById("cargar"),d=document.getElementById("siguiente"),anterior=document.getElementById("anterior"),m=document.getElementById("myForm"),m.addEventListener("submit",e=>{e.preventDefault()});const r=w(()=>{b()},300);m.addEventListener("input",r),u.addEventListener("click",()=>{try{let e;clearTimeout(e),e=setTimeout(()=>{b()},300)}catch(e){console.log(e)}finally{}}),d.addEventListener("click",()=>{try{s<p&&v(++s),console.log(s)}catch(e){console.log(e)}}),anterior.addEventListener("click",()=>{try{s>1&&v(--s),console.log(s)}catch(e){console.log(e)}})}M();
