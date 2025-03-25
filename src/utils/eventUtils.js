import { navigationTo } from "./routerUtils";
import { render } from "../main";

// 링크 클릭시 페이지 이동
document.addEventListener("click", async (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();

    const href = e.target.getAttribute("href");
    navigationTo(href);
  }
});

// 브라우저 뒤로가기시 이전 상태 복원
window.addEventListener("popstate", () => {
  render();
});
