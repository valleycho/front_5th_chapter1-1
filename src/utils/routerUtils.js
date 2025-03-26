// routerUtils.js
import { LoginPage } from "../pages/LoginPage.js";
import { MainPage } from "../pages/MainPage.js";
import { ProfilePage } from "../pages/ProfilePage.js";
import { ErrorPage } from "../pages/ErrorPage.js";
import { render } from "../main.js";
import { hashRender } from "../main.hash.js";

const appPath = window.location.hostname.includes("github.io")
  ? "/front_5th_chapter1-1/"
  : "/";

const routes = {
  [`${appPath}`]: () => MainPage(),
  [`${appPath}login`]: () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigationTo("/");
      return MainPage();
    }

    return LoginPage();
  },
  [`${appPath}profile`]: () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigationTo("/login");
      return LoginPage();
    }
    return ProfilePage();
  },
  [`${appPath}*`]: () => ErrorPage(),
};

export const getPathName = () => {
  if (window.hashMode) {
    return window.location.hash.substring(1);
  }
  return window.location.pathname;
};

export const navigationTo = (path) => {
  const removeSlashPath = path.replace("/", "");

  if (window.hashMode) {
    window.location.hash = `${appPath}${removeSlashPath}`;
    hashRender();
  } else {
    window.history.pushState(null, "", `${appPath}${removeSlashPath}`);
    render();
  }
};

export const Router = () => {
  const pathName = getPathName();
  return (routes[pathName] || routes[`${appPath}*`])();
};

export const HashRouter = () => {
  if (!window.location.hash) {
    window.location.hash = "#/";
  }

  const hashPath = window.location.hash.substring(1);
  return (routes[hashPath] || routes[`${appPath}*`])();
};

export const InitRouter = () => {
  if (window.hashMode) {
    return HashRouter();
  }
  return Router();
};
