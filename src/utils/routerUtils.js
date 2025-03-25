import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ErrorPage } from "../pages/ErrorPage";
import { render } from "../main";

const routes = {
  "/": () => MainPage(),
  "/login": () => LoginPage(),
  "/profile": () => ProfilePage(),
  "*": () => ErrorPage(),
};

export const getPathName = () => {
  return window.location.pathname;
};

export const navigationTo = (path) => {
  window.history.pushState(null, "", path); // 히스토리에 경로 저장
  render(); // 페이지 렌더링
};

export const Router = () => {
  const pathName = window.location.pathname;
  return (routes[pathName] || routes["*"])();
};

export const InitRouter = () => {
  return Router();
};
