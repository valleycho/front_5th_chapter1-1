import { navigationTo } from "./routerUtils";
import { render } from "../main";

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
});

// 브라우저 뒤로가기시 이전 상태 복원
window.addEventListener("popstate", () => {
  render();
});
