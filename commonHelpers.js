import{i as d,S as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(o,r){const{API_KEY:n,image_type:s,orientation:e,safesearch:t}=r;return fetch(`https://pixabay.com/api/?key=${n}&q=${o}&image_type=${s}&orientation=${e}&safesearch=${t}`).then(a=>{if(console.log(a),!a.ok)throw new Error(a.status);return a.json()})}function f(o){const r=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
   <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${e}"
      width="360px"
      height="200px"
      
    />
    <div class="text-container">
     <p class="text-content">Likes <span class="data-server" >${t}</span></p>
    <p class="text-content">Views <span class="data-server" >${a}</span></p>
    <p class="text-content">Comments <span class="data-server" > ${u}</span></p>
    <p class="text-content">Downloads <span class="data-server" >${p} </span></p>
    </div>
   
  </a>
</li>
`).join("");g.innerHTML=r}const y=document.querySelector(".input-js"),l=document.querySelector("#searchForm"),g=document.querySelector(".markup-js"),i=document.querySelector(".loader"),c=document.querySelector(".content");l.addEventListener("submit",v);function v(o){o.preventDefault();const r=y.value.trim();if(!r){alert("Please enter a search term");return}i.classList.remove("hidden"),c.classList.add("hidden"),h(r,{API_KEY:"44976871-26e069ad13948ce040aac9258",image_type:"photo",orientation:"horizontal",safesearch:!0,query:r}).then(s=>{s.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(s.hits),l.reset(),new m(".markup-js a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(s=>console.error("Fetch Error: ",s)).finally(()=>{i.classList.add("hidden"),c.classList.remove("hidden")})}
//# sourceMappingURL=commonHelpers.js.map
