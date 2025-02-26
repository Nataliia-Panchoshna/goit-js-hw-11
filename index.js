import{a as p,S as f,i as a}from"./assets/vendor-KnZd4sWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="YOUR_PIXABAY_API_KEY",y="https://pixabay.com/api/";async function d(o){return(await p.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const c=document.querySelector(".gallery");let l;function h(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:m})=>`
        <li class="gallery-item">
            <a href="${n}" class="gallery-link">
                <img src="${s}" alt="${e}" class="gallery-image">
            </a>
            <div class="image-info">
                <p><b>Likes:</b> ${r}</p>
                <p><b>Views:</b> ${i}</p>
                <p><b>Comments:</b> ${u}</p>
                <p><b>Downloads:</b> ${m}</p>
            </div>
        </li>
    `).join("");c.innerHTML=t,l?l.refresh():l=new f(".gallery a")}function b(){c.innerHTML=""}const L=document.querySelector("#search-form");document.querySelector(".gallery");L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b();try{const s=await d(t);if(s.length===0){a.error({title:"Error",message:"Sorry, no images found. Please try another query!",position:"topRight"});return}h(s)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}});
//# sourceMappingURL=index.js.map
