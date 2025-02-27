import{i,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();function u(s){let{hits:t}=s;const n=document.querySelector(".gallery");if(t.length===0){i.show({...c,message:"Sorry, there are no images matching your search query. Please, try again!"}),n.innerHTML="";return}const a=t.map(e=>`<li class='gallery__item'>
        <a class='gallery__link' href="${e.largeImageURL}">
        <img class='gallery__img' src="${e.webformatURL}" alt="${e.tags}" />
          <div class="grid">
            <p>Likes</p>
            <p>Views</p>
            <p>Comment</p>
            <p>Downloads</p>
            <span>${e.likes}</span>
            <span>${e.views}</span>
            <span>${e.comments}</span>
            <span>${e.downloads}</span>
          </div>
        </a>
      </li>`).join(" ");n.innerHTML=a,new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(s){const t=document.querySelector(".gallery"),n="49078062-013dc20f7945f56078ec7160a",a=encodeURIComponent(s),e=`https://pixabay.com/api/?${new URLSearchParams({key:n,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(e).then(o=>{if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()}).then(o=>u(o)).catch(o=>{console.error(o),t.innerHTML="",i.show({...c,message:"Sorry, an error happened. Try again"})})}const c={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:errorIcon,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};document.querySelector(".form").addEventListener("submit",s=>{const t=document.querySelector(".user-input").value.trim(),n=document.querySelector(".gallery");if(s.preventDefault(),!t){i.show({...c,message:"Please enter the search query"});return}n.innerHTML='<p>Wait, the image is loaded</p><span class="loader"></span>',p(t)});
//# sourceMappingURL=index.js.map
