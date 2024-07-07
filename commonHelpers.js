import{S as f,i as m}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",h="44774351-929c2aa0766411c652402d8c1";async function y(n,t=1,o=12){const s=`${p}?key=${h}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&perPage=${o}`,e=await fetch(s);if(!e.ok)throw new Error(e.status);return await e.json()}let a;function g(n){const t=document.querySelector(".gallery"),o=n.map(s=>b(s)).join("");t.innerHTML=o,a?a.refresh():a=new f(".gallery a")}function b({webformatURL:n,largeImageURL:t,tags:o,likes:s,views:e,comments:r,downloads:i}){return`
  <div class="photo-card">
  <a href="${t}">
    <img cass="img" src="${n}" alt="${o}" loading="lazy"/>
    </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b>${s}</p>
        <p  class="info-item"><b>Views:</b>${e}</p>
        <p class="info-item"><b>Comments:</b>${r}</p>
        <p class="info-item"><b>Downloads:</b>${i}</p>
      </div>
</div>`}function c(n,t="info"){m[t]({title:"",message:n,position:"topRight"})}function L(){document.querySelector(".gallery").innerHTML=""}const $=document.querySelector(".search-form"),l=document.querySelector("#search-input"),d=document.querySelector(".loader");$.addEventListener("submit",async n=>{n.preventDefault();const t=l.value.trim();if(!t){c("Please enter a search query.","warning");return}L(),w(),l.value="";try{const o=await y(t);if(u(),o.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!","error");return}g(o.hits)}catch{u(),c("Error: ${error.message}")}});function w(){d.classList.remove("hidden")}function u(){d.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
