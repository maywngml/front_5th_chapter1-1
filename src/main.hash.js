import Router from "./router/hashRouter";

const router = new Router();

window.addEventListener("popstate", () => {
  router.render();
});

router.render();
