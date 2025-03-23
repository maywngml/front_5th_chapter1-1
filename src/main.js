import { HomePage, ProfilePage, LoginPage, NotFoundPage } from "./pages";

const App = () => {
  if (location.pathname === "/") {
    return HomePage();
  } else if (location.pathname === "/login") {
    return LoginPage();
  } else if (location.pathname === "/profile") {
    return ProfilePage();
  } else {
    return NotFoundPage();
  }
};

const render = () => {
  const app = App();

  document.body.innerHTML = app.template();

  if (app.setEventHandlers) {
    app.setEventHandlers();
  }

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const newPathName = e.target.href.replace(location.origin, "");
      history.pushState(null, "", newPathName);
      render();
    });
  });
};

window.addEventListener("popstate", () => {
  render();
});

render();
