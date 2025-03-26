import Router from "./router/hashRouter";
import { setRouterType } from "./router/router";

setRouterType("hash");
const router = new Router();

window.addEventListener("popstate", () => {
  router.render();
});

router.render();
