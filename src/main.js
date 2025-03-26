import Router from "./router/browserRouter";
import { setRouterType } from "./router/router";

setRouterType("browser");
const router = new Router();

window.addEventListener("popstate", () => {
  router.render();
});

router.render();
