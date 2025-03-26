import { InitRouter } from "./utils/routerUtils.js";
import "./utils/eventUtils.js";

window.hashMode = true;

export const hashRender = () => {
  document.getElementById("root").innerHTML = InitRouter();
};

document.addEventListener("DOMContentLoaded", () => {
  hashRender();
});
