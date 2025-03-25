import "./utils/eventUtils";
import { InitRouter } from "./utils/routerUtils";

export const render = () => {
  document.getElementById("root").innerHTML = InitRouter();
};

render();
