import "./utils/eventUtils";
import { InitRouter } from "./utils/routerUtils";

window.hashMode = false;

export const render = () => {
  document.getElementById("root").innerHTML = InitRouter();
};

// dom 로드 후에 window.hashMode 값 사용하려고 로드 된 후에 렌더링 되게 수정
document.addEventListener("DOMContentLoaded", () => {
  render();
});
