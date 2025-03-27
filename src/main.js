import { routerConfig } from "./utils/routerUtils.js";
import render from "./App.js";
import eventHandler from "./utils/eventUtils.js";

routerConfig.setRouterType("history");

eventHandler.init();
render();
