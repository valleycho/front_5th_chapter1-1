import { InitRouter } from "./utils/routerUtils";
import "./utils/eventUtils";

window.hashMode = true;

export const hashRender = () => {
  document.getElementById("root").innerHTML = InitRouter();
};

document.addEventListener("DOMContentLoaded", () => {
  hashRender();
});
