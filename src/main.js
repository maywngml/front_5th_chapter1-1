import Router from "./router";

const router = new Router();

window.addEventListener("popstate", () => {
  router.render();
});

router.render();
