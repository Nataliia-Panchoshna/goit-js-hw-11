import{a as m,S as p,i as n}from"./assets/vendor-KnZd4sWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/";async function d(o){return(await m.get(g,{params:{key:"49078062-013dc20f7945f56078ec7160a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const c=document.querySelector(".gallery");let l;function y(o){const t=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:u,downloads:f})=>`
        <li class="gallery-item">
            <a href="${a}" class="gallery-link">
                <img src="${i}" alt="${e}" class="gallery-image">
            </a>
            <div class="image-info">
                <p><b>Likes:</b> ${r}</p>
                <p><b>Views:</b> ${s}</p>
                <p><b>Comments:</b> ${u}</p>
                <p><b>Downloads:</b> ${f}</p>
            </div>
        </li>
    `).join("");c.innerHTML=t,l?l.refresh():l=new p(".gallery a")}function h(){c.innerHTML=""}const b=document.querySelector("#search-form");document.querySelector(".gallery");b.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}h();try{const i=await d(t);if(i.length===0){n.error({title:"Error",message:"Sorry, no images found. Please try another query!",position:"topRight"});return}y(i)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}});
//# sourceMappingURL=index.js.map
