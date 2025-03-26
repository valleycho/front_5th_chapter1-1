import { navigationTo } from "./routerUtils.js";
import { render } from "../main.js";
import { hashRender } from "../main.hash.js";

// 링크 클릭시 페이지 이동
document.addEventListener("click", async (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();

    if (e.target.textContent === "로그아웃") {
      await localStorage.removeItem("user");
      navigationTo("/login");
      return;
    }

    const href = e.target.getAttribute("href");
    navigationTo(href);
  }
});

// form 제출시 동작 이벤트
document.addEventListener("submit", (e) => {
  if (e.target.id === "login-form") {
    // 로그인
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ username: "testuser", email: "", bio: "" }),
    );

    navigationTo("/profile");
    render();
  }

  if (e.target.id === "profile-form") {
    const username = document.getElementById("username")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const bio = document.getElementById("bio")?.value || "";

    localStorage.setItem(
      "user",
      JSON.stringify({
        username: username,
        email: email,
        bio: bio,
      }),
    );

    alert("프로필이 업데이트되었습니다.");
  }
});

// 브라우저 뒤로가기시 이전 상태 복원
window.addEventListener("popstate", () => {
  render();
});

// 해시라우터 변경시 렌더링
window.addEventListener("hashchange", () => {
  hashRender();
});
