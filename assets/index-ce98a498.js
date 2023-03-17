(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const a=`<form id="myForm" class="grid">\r
  <input type="search" name="search" id="search" placeholder="Buscar pelicula...">\r
  <button id="cargar">Cargar</button>\r
</form>\r
<div class="grid-movies">\r
  <figure>\r
    <img src="" alt="">\r
    <figcaption><time></time></figcaption>\r
  </figure>\r
</div>`,s=document.querySelector("#app"),u="https://www.omdbapi.com/",l="?apikey=bb557db";let d=u+""+l+"&s=";async function m(){document.getElementById("cargar").setAttribute("aria-busy",!0);const n=await(await fetch(d+document.getElementById("search").value.trim())).json();n!==null?document.querySelector(".grid-movies").innerHTML=p(n).join(""):document.querySelector(".grid-movies").innerHTML="<p>Error desconocido</p>",document.getElementById("cargar").removeAttribute("aria-busy")}function p(t){return t.Response==="True"?t.Search.map(i=>`<figure>
        <img src="${i.Poster}" alt="${i.Type}">
        <figcaption>${i.Title}<time>${i.Year}</time></figcaption>
      </figure>`):[`<p>${t.Error}</p>`,`<p>${t.Response}</p>`]}function f(){if(!s)throw new Error("No existe elemento raiz");s.innerHTML=`
    <div class="container">
      <h1>Hello Vite!</h1>
      <div id="peliculas">${a}</div>
    </div>
  `,document.getElementById("myForm").addEventListener("submit",t=>{t.preventDefault()}),document.getElementById("cargar").addEventListener("click",()=>{try{m()}catch(t){console.log(t)}finally{}})}f();
