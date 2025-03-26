import Router from "./router/browserRouter";

const router = new Router();

window.addEventListener("popstate", () => {
  router.render();
});

router.render();
