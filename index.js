import{i as a,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="YOUR_PIXABAY_API_KEY",f=document.getElementById("search-form"),u=document.getElementById("gallery");f.addEventListener("submit",o=>{o.preventDefault();const s=o.target.query.value;d(s)});async function d(o){const t=await(await fetch(`https://pixabay.com/api/?key=${l}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`)).json();if(t.hits.length===0){a.error({title:"Error",message:"No images found. Please try again!"});return}m(t.hits)}function m(o){u.innerHTML=o.map(t=>`
    <div class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <p>Likes: ${t.likes} Views: ${t.views} Comments: ${t.comments} Downloads: ${t.downloads}</p>
    </div>
  `).join(""),new c(".gallery-item a").refresh()}
//# sourceMappingURL=index.js.map
