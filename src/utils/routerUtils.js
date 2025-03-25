// routerUtils.js
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ErrorPage } from "../pages/ErrorPage";
import { render } from "../main";
import { hashRender } from "../main.hash";

const routes = {
  "/": () => MainPage(),
  "/login": () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigationTo("/");
      return MainPage();
    }

    return LoginPage();
  },
  "/profile": () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigationTo("/login");
      return LoginPage();
    }
    return ProfilePage();
  },
  "*": () => ErrorPage(),
};

export const getPathName = () => {
  if (window.hashMode) {
    return window.location.hash.substring(1);
  }
  return window.location.pathname;
};

export const navigationTo = (path) => {
  if (window.hashMode) {
    window.location.hash = path;
    hashRender();
  } else {
    window.history.pushState(null, "", path);
    render();
  }
};

export const Router = () => {
  const pathName = window.location.pathname;
  return (routes[pathName] || routes["*"])();
};

export const HashRouter = () => {
  if (!window.location.hash) {
    window.location.hash = "#/";
  }

  const hashPath = window.location.hash.substring(1);
  return (routes[hashPath] || routes["*"])();
};

export const InitRouter = () => {
  if (window.hashMode) {
    return HashRouter();
  }
  return Router();
};
