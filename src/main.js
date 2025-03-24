import { HomePage, ProfilePage, LoginPage, NotFoundPage } from "./pages";
import { getUser } from "./utils/auth";

const App = () => {
  const user = getUser();

  if (location.pathname === "/") {
    return HomePage();
  } else if (location.pathname === "/login") {
    return LoginPage();
  } else if (location.pathname === "/profile") {
    if (user) {
      return ProfilePage();
    } else {
      history.pushState(null, "", "/login");
      return;
    }
  } else {
    return NotFoundPage();
  }
};

const render = () => {
  const app = App();

  if (app?.template) {
    document.getElementById("root").innerHTML = app.template();
  }
  if (app?.setEventHandlers) {
    app.setEventHandlers();
  }

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const newPathName = e.target.href.replace(location.origin, "");
      history.pushState(null, "", newPathName);
    });
  });
};

const originalPushState = history.pushState;

history.pushState = function (...args) {
  originalPushState.apply(this, args);

  const event = new Event("pushstate");
  window.dispatchEvent(event);
};

window.addEventListener("popstate", () => {
  render();
});

window.addEventListener("pushstate", () => {
  render();
});

render();
