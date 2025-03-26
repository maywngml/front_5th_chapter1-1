import Router from "./router/hashRouter";
import { setRouterType } from "./router/router";

setRouterType("hash");
const router = new Router();

addEventListener("popstate", () => {
  router.render();
});

addEventListener("hashchange", () => {
  router.render();
});

router.render();
