import { HomePage, ProfilePage, LoginPage, NotFoundPage } from "./pages";
import { useUserStore } from "./store";

const ROUTES = {
  "/": {
    page: HomePage,
  },
  "/login": {
    page: LoginPage,
  },
  "/profile": {
    page: ProfilePage,
  },
  "/error": {
    page: NotFoundPage,
  },
};

export default class Router {
  ROUTES: any;
  constructor() {
    this.ROUTES = ROUTES;
  }

  render() {
    const userStore = useUserStore();
    let pathname = location.pathname;

    if (pathname === "/profile" && !userStore.user) {
      history.pushState(null, "", "/login");
      pathname = "/login";
    } else if (pathname === "/login" && userStore.user) {
      history.pushState(null, "", "/");
      pathname = "/";
    }

    const App = this.ROUTES[pathname]
      ? this.ROUTES[pathname].page
      : this.ROUTES["/error"].page;
    const app = App();
    const root = document.getElementById("root");
    console.log(app);
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
