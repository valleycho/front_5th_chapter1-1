import { MainPage } from "./pages/MainPage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { ErrorPage } from "./pages/ErrorPage.js";
import { customRouterUtils, routerConfig } from "./utils/routerUtils.js";

const getPage = (path) => {
  if (path === "/") {
    return MainPage();
  }

  if (path === "/login") {
    return customRouterUtils.RouterGuard({
      path: "/login",
      component: LoginPage(),
      redirectComponent: MainPage(),
    });
  }

  if (path === "/profile") {
    return customRouterUtils.RouterGuard({
      path: "/profile",
      component: ProfilePage(),
      redirectComponent: LoginPage(),
    });
  }

  return ErrorPage();
};

const render = () => {
  if (routerConfig.getRouterType() === "hash" && !window.location.hash) {
    window.location.hash = "#/";
  }

  const path = customRouterUtils.getCurrentPath();
  document.getElementById("root").innerHTML = getPage(path);
};

export default render;
