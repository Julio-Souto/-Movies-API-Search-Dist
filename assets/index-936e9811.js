(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();var w=A;function A(r,e,i){var o=null,t=null,n=function(){o&&(clearTimeout(o),t=null,o=null)},l=function(){var u=t;n(),u&&u()},m=function(){if(!e)return r.apply(this,arguments);var u=this,T=arguments,y=i&&!o;if(n(),t=function(){r.apply(u,T)},o=setTimeout(function(){if(o=null,!y){var P=t;return t=null,P()}},e),y)return t()};return m.cancel=n,m.flush=l,m}const B=`<form id="myForm" class="grid">\r
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
</div>`,b=document.querySelector("#app"),I="https://www.omdbapi.com/",M="?apikey=bb557db";let a=null,d=null,f=null,p=null,g=null,s=1,c=1,E=I+""+M+"&s=";async function v(){s=1,d.setAttribute("aria-busy",!0);const e=await(await fetch(E+document.getElementById("search").value.trim())).json();e!==null?a.innerHTML=L(e).join(""):a.innerHTML="<p>Error desconocido</p>",d.removeAttribute("aria-busy")}async function h(r){f.setAttribute("aria-busy",!0),p.setAttribute("aria-busy",!0);const i=await(await fetch(E+document.getElementById("search").value.trim()+"&page="+r)).json();i!==null?a.innerHTML=L(i).join(""):a.innerHTML="<p>Error desconocido</p>",f.removeAttribute("aria-busy"),p.removeAttribute("aria-busy")}function L(r){return r.Response==="True"?(r.totalResults>10?c=Math.ceil(Number(r.totalResults)/10):c=1,document.getElementById("totalPages").innerHTML="Páginas: "+s+"/"+c+" - "+r.totalResults+" Resultados totales",r.Search.map(i=>`<figure>
        <img src="${i.Poster}" alt="${i.Type}">
        <figcaption>${i.Title}<time> ${i.Year}</time></figcaption>
      </figure>`)):[`<p>${r.Error}</p>`,`<p>${r.Response}</p>`]}function R(){if(!b)throw new Error("No existe elemento raiz");b.innerHTML=`
    <div class="container">
      <div id="peliculas">
      <h1>Buscador de peliculas</h1>
      ${B}
      </div>
    </div>
  `,a=document.querySelector(".grid-movies"),d=document.getElementById("cargar"),p=document.getElementById("anterior"),f=document.getElementById("siguiente"),g=document.getElementById("myForm"),g.addEventListener("submit",e=>{e.preventDefault()});const r=w(()=>{v()},300);g.addEventListener("input",r),d.addEventListener("click",()=>{try{let e;clearTimeout(e),e=setTimeout(()=>{v()},300)}catch(e){console.log(e)}finally{}}),f.addEventListener("click",()=>{try{s<c&&h(++s),console.log(s)}catch(e){console.log(e)}}),p.addEventListener("click",()=>{try{s>1&&h(--s),console.log(s)}catch(e){console.log(e)}})}R();
