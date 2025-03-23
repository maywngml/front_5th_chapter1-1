import { HomePage, ProfilePage, LoginPage, NotFoundPage } from "./pages";

document.body.innerHTML = `
  ${HomePage()}
  ${ProfilePage()}
  ${LoginPage()}
  ${NotFoundPage()}
`;
