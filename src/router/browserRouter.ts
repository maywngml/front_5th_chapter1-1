import { useUserStore } from "@/store";
import ROUTES from "./routes";

export default class Router {
  ROUTES: any;
  pageId: string;

  constructor() {
    this.ROUTES = ROUTES;
    this.pageId = "home";
  }

  init() {
    const userStore = useUserStore();
    let pathname = location.pathname;

    if (pathname === "/profile" && !userStore.user) {
      history.pushState(null, "", "/login");
      this.pageId = "login";
    } else if (pathname === "/login" && userStore.user) {
      history.pushState(null, "", "/");
      this.pageId = "home";
    } else {
      this.pageId = pathname === "/" ? "home" : pathname.replace("/", "");
    }
  }

  render() {
    this.init();
    console.log(this.pageId);
    const App = this.ROUTES[this.pageId]
      ? this.ROUTES[this.pageId].page
      : this.ROUTES["error"].page;
    const app = App();
    console.log(app, this.pageId);
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

  navigate(pathname: string) {
    if (pathname !== window.location.pathname) {
      history.pushState(null, "", pathname);
      this.render();
    }
  }
}
