(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a="False",s={Response:a,Error:"Invalid API key!"},d="False",l={Response:d,Error:"Movie not found!"},p=`<form id="myForm" class="grid">\r
  <input type="search" name="search" id="search" placeholder="Buscar pelicula...">\r
  <button id="cargar">Cargar</button>\r
</form>\r
<div class="grid-movies">\r
  <figure>\r
    <img src="" alt="">\r
    <figcaption><time></time></figcaption>\r
  </figure>\r
</div>`,u=document.querySelector("#app"),f="https://www.omdbapi.com/",m="?apikey=bb557db";let g=f+""+m+"&s=";function y(){fetch(g+document.getElementById("search").value.trim()).then(r=>r.json()).then(r=>{r!==null?document.querySelector(".grid-movies").innerHTML=h(r).join(""):document.querySelector(".grid-movies").innerHTML="<p>Error desconocido</p>"})}function h(r){return r.Response==="True"?r.Search.map(n=>`<figure>
        <img src="${n.Poster}" alt="${n.Type}">
        <figcaption>${n.Title}<time>${n.Year}</time></figcaption>
      </figure>`):r.Error==="Movie not found!"?[`<p>${l.Error}</p>`,`<p>${l.Response}</p>`]:[`<p>${s.Error}</p>`,`<p>${s.Response}</p>`]}function v(){if(!u)throw new Error("No existe elemento raiz");u.innerHTML=`
    <div class="container">
      <h1>Hello Vite!</h1>
      <div id="peliculas">${p}</div>
    </div>
  `,document.getElementById("myForm").addEventListener("submit",r=>{r.preventDefault()}),document.getElementById("cargar").addEventListener("click",()=>{y()})}v();const E=`
{
  "nombre" : "Nombre"
}`;console.log(s,JSON.parse(E));
