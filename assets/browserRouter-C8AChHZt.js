(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class y{constructor(){this.storedUser=null,this.storedUser=null}login(t){const e={username:t,email:"",bio:""};localStorage.setItem("user",JSON.stringify(e)),this.storedUser=e}logout(){localStorage.removeItem("user")}get user(){const t=localStorage.getItem("user");let e=null;return t&&(e=JSON.parse(t)),this.storedUser=e,e}updateUser(t){localStorage.setItem("user",JSON.stringify(t)),this.storedUser=null}}const w=new y;function c(){return w}const E=()=>({template:()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div
        class="bg-white p-8 rounded-lg shadow-md w-full text-center"
        style="max-width: 480px"
      >
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `});class S{constructor(){this.ROUTES=x,this.pageId="home"}init(){const t=c(),e=location.hash;let o=e;e==="#/profile"&&!t.user?(this.pageId="login",o="#/login"):e==="#/login"&&t.user||e==="#/"||e===""?(this.pageId="home",o="#/"):this.pageId=e.slice(2),location.hash=o}render(){var s;this.init();const e=(this.ROUTES[this.pageId]?this.ROUTES[this.pageId].page:this.ROUTES.error.page)(),o=document.getElementById("root");o&&(o.innerHTML=e.template()),e!=null&&e.setEventHandlers&&e.setEventHandlers(),(s=document.querySelector("nav"))==null||s.addEventListener("click",n=>{if(n.preventDefault(),n.target){const a=n.target;if(a.nodeName==="A"){const l=a.href.replace(location.origin,"");this.navigate(l)}}})}navigate(t){let e=t.includes("#")?t:`#${t}`;t!==location.hash&&(location.hash=e,this.render())}}let f="browser";const N=r=>{f=r},H=()=>f==="browser"?F:S,$=()=>{const r=c(),t=H(),e=new t;return{template:()=>` <form id="login-form">
      <div class="mb-4">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="사용자 이름"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-6">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          class="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded font-bold"
      >
        로그인
      </button>
    </form>`,setEventHandlers:()=>{var a;const n=l=>{l.preventDefault();const i=l.target,d=new FormData(i).get("username");d?(r.login(d.toString()),e.navigate("/")):alert("사용자 이름이 입력되지 않았습니다.")};(a=document.querySelector("#login-form"))==null||a.addEventListener("submit",n)}}},I=()=>{const{template:r,setEventHandlers:t}=$();return{template:()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
          항해플러스
        </h1>
        ${r()}
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6" />
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
            새 계정 만들기
          </button>
        </div>
      </div>
    </main>
  `,setEventHandlers:()=>{t()}}},O=()=>{const r=c(),t=location.pathname,e=location.hash,o=t.split("/"),s=e?e.slice(1):`/${o[o.length-1]}`,n=r.user?"loggedIn":"logout";return`<nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      ${{loggedIn:[{href:"/",id:"home",title:"홈"},{href:"/profile",id:"profile",title:"프로필"},{href:"/login",id:"logout",title:"로그아웃"}],logout:[{href:"/",id:"home",title:"홈"},{href:"/login",id:"/login",title:"로그인"}]}[n].map(({href:l,id:i,title:u})=>`<li><a href="${l}" id=${i} class="${s===l?"font-bold text-blue-600":"text-gray-600"}">${u}</a></li>`).join("")}
    </ul>
  </nav>`},b=()=>{const r=c();return{template:()=>`<header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      ${O()} `,setEventHandlers:()=>{var s;const o=()=>{r.logout()};(s=document.getElementById("logout"))==null||s.addEventListener("click",o)}}},v=` <footer class="bg-gray-200 p-4 text-center">
  <p>&copy; 2024 항해플러스. All rights reserved.</p>
</footer>`,P=({author:r,time:t,contents:e})=>`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img
          src="https://placehold.co/40"
          alt="프로필"
          class="rounded-full mr-2"
        />
        <div>
          <p class="font-bold">${r}</p>
          <p class="text-sm text-gray-500">${t}</p>
        </div>
      </div>
      <p>${e}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `,h="/front_5th_chapter1-1",U=[{author:"홍길동",time:"5분 전",contents:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{author:"김철수",time:"15분 전",contents:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{author:"이영희",time:"30분 전",contents:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{author:"박민수",time:"1시간 전",contents:"주말에 등산 가실 분 계신가요? 함께 가요!"},{author:"이영희",time:"2시간 전",contents:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],T=()=>{const{template:r,setEventHandlers:t}=b();return{template:()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${r()}
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea
              class="w-full p-2 border rounded"
              placeholder="무슨 생각을 하고 계신가요?"
            ></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              게시
            </button>
          </div>

          <div class="space-y-4">
            ${U.map(s=>P(s)).join("")}
          </div>
        </main>

        ${v}
      </div>
    </div>
  `,setEventHandlers:()=>{t()}}},L=()=>{var o,s,n;const r=c();return{template:` <form id="profile-form">
    <div class="mb-4">
      <label for="username" class="block text-gray-700 text-sm font-bold mb-2"
        >사용자 이름</label
      >
      <input
        type="text"
        id="username"
        name="username"
        value="${(o=r.user)==null?void 0:o.username}"
        class="w-full p-2 border rounded"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
        >이메일</label
      >
      <input
        type="email"
        id="email"
        name="email"
        value="${(s=r.user)==null?void 0:s.email}"
        class="w-full p-2 border rounded"
      />
    </div>
    <div class="mb-6">
      <label for="bio" class="block text-gray-700 text-sm font-bold mb-2"
        >자기소개</label
      >
      <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">
${(n=r.user)==null?void 0:n.bio}</textarea
      >
    </div>
    <button
      type="submit"
      class="w-full bg-blue-600 text-white p-2 rounded font-bold"
    >
      프로필 업데이트
    </button>
  </form>`,setEventHandlers:()=>{var l;const a=i=>{i.preventDefault();const u=i.target,d=new FormData(u),m=d.get("username"),p=d.get("email"),g=d.get("bio");m?(r.updateUser({username:m.toString(),email:p?p.toString():"",bio:g?g.toString():""}),alert("프로필이 업데이트 되었습니다.")):alert("사용자 이름을 입력해주세요.")};(l=document.getElementById("profile-form"))==null||l.addEventListener("submit",a)}}},R=()=>{const{template:r,setEventHandlers:t}=b(),{template:e,setEventHandlers:o}=L();return{template:()=>`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${r()}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              ${e}
            </div>
          </main>
          ${v}
        </div>
      </div>
    </div>
  `,setEventHandlers:()=>{t(),o()}}},x={home:{pathname:"/",page:T},login:{pathname:"/login",page:I},profile:{pathname:"/profile",page:R},error:{pathname:"/error",page:E}};class F{constructor(){this.ROUTES=x,this.pageId="home",this.prefix=location.pathname.indexOf(h)===0?h:""}init(){const t=c(),e=location.pathname.split("/"),o=e[e.length-1];o==="profile"&&!t.user?(history.pushState(null,"",`${this.prefix}/login`),this.pageId="login"):o==="login"&&t.user?(history.pushState(null,"",`${this.prefix}/`),this.pageId="home"):this.pageId=o===""?"home":o}render(){var s;this.init();const e=(this.ROUTES[this.pageId]?this.ROUTES[this.pageId].page:this.ROUTES.error.page)(),o=document.getElementById("root");o&&(o.innerHTML=e.template()),e!=null&&e.setEventHandlers&&e.setEventHandlers(),(s=document.querySelector("nav"))==null||s.addEventListener("click",n=>{if(n.preventDefault(),n.target){const a=n.target;if(a.nodeName==="A"){const l=a.href.replace(location.origin,"");this.navigate(l)}}})}navigate(t){t!==window.location.pathname&&(history.pushState(null,"",`${this.prefix}${t}`),this.render())}}export{F as B,S as H,N as s};
