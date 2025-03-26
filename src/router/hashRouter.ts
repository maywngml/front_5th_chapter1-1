import { useUserStore } from "@/store";
import ROUTES from "./routes";

export default class Router {
  ROUTES: any;
  pageId = "/";
  hash: string;

  constructor() {
    this.ROUTES = ROUTES;
    this.pageId = "/";
    this.hash = "/";
  }

  init() {
    const userStore = useUserStore();
    let hash = location.hash;
    let newHash = hash.includes("#") ? hash : `#${hash}`;

    if (hash === "/profile" && !userStore.user) {
      hash = "/login";
    } else if (hash === "/login" && userStore.user) {
      hash = "/";
    }
  }

  render() {
    this.init();

    const App = this.ROUTES[this.hash]
      ? this.ROUTES[this.hash].page
      : this.ROUTES["/error"].page;
    const app = App();
    const root = document.getElementById("root");

    if (root) {
      root.innerHTML = app.template();
    }

    if (app?.setEventHandlers) {
      app.setEventHandlers();
    }

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target) {
          const target = e.target as HTMLAnchorElement;
          const newPathName = target.href.replace(location.origin, "");
          this.navigate(newPathName);
        }
      });
    });
  }

  navigate(hash: string) {
    let newHash = hash.includes("#") ? hash : `#${hash}`;
    if (hash !== location.hash) {
      location.hash = newHash;
      this.render();
    }
  }
}
