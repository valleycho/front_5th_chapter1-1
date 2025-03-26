(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const b=()=>`
		<main class="bg-gray-100 flex items-center justify-center min-h-screen">
				<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
						<h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
						<form id="login-form">
						<div class="mb-4">
								<input type="text" placeholder="사용자 이름" class="w-full p-2 border rounded" id="username">
						</div>
						<div class="mb-6">
								<input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
						</div>
						<button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
						</form>
						<div class="mt-4 text-center">
						<a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
						</div>
						<hr class="my-6">
						<div class="text-center">
						<button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
						</div>
				</div>
		</main>
	`,f=()=>{const t=localStorage.getItem("user"),s=t&&t!==null,l=x();return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${s?`
            <li><a href="/" class="${l==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
            <li><a href="/profile" class="${l==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
            <li><a href="#" class="text-gray-600" id="logout">로그아웃</a></li>
          `:`
            <li><a href="/" class="${l==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
            <li><a href="/login" class="${l==="/login"?"text-blue-600 font-bold":"text-gray-600"}">로그인</a></li>
          `}
          
        </ul>
      </nav>
  `},p=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,m=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${f()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>

      ${p()}
    </div>
  </div>
`,h=()=>{let t="",s="",l="";try{const n=localStorage.getItem("user");if(n&&n!=="null"){const e=JSON.parse(n);t=e.username||"",s=e.email||"",l=e.bio||""}}catch(n){console.error("사용자 정보 처리 오류:",n)}return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${f()}

          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${t}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${s}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${l}</textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>

          ${p()}
        </div>
      </div>
    </div>
  `},v=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
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
`;window.hashMode=!0;const u=()=>{document.getElementById("root").innerHTML=g()};document.addEventListener("DOMContentLoaded",()=>{u()});const i="/front_5th_chapter1-1/",d={[`${i}`]:()=>m(),[`${i}login`]:()=>localStorage.getItem("user")?(r("/"),m()):b(),[`${i}profile`]:()=>localStorage.getItem("user")?h():(r("/login"),b()),[`${i}*`]:()=>v()},x=()=>window.hashMode?window.location.hash.substring(1):window.location.pathname,r=t=>{window.hashMode?(window.location.hash=t,u()):(window.history.pushState(null,"",t),c())},w=()=>{const t=window.location.pathname;return(d[t]||d["*"])()},y=()=>{window.location.hash||(window.location.hash="#/");const t=window.location.hash.substring(1);return(d[t]||d["*"])()},g=()=>window.hashMode?y():w();document.addEventListener("click",async t=>{if(t.target.tagName==="A"){if(t.preventDefault(),t.target.textContent==="로그아웃"){await localStorage.removeItem("user"),r("/login");return}const s=t.target.getAttribute("href");r(s)}});document.addEventListener("submit",t=>{var s,l,n;if(t.target.id==="login-form"&&(t.preventDefault(),localStorage.setItem("user",JSON.stringify({username:"testuser",email:"",bio:""})),r("/profile"),c()),t.target.id==="profile-form"){const e=((s=document.getElementById("username"))==null?void 0:s.value)||"",o=((l=document.getElementById("email"))==null?void 0:l.value)||"",a=((n=document.getElementById("bio"))==null?void 0:n.value)||"";localStorage.setItem("user",JSON.stringify({username:e,email:o,bio:a})),alert("프로필이 업데이트되었습니다.")}});window.addEventListener("popstate",()=>{c()});window.addEventListener("hashchange",()=>{u()});window.hashMode=!1;const c=()=>{document.getElementById("root").innerHTML=g()};document.addEventListener("DOMContentLoaded",()=>{c()});
