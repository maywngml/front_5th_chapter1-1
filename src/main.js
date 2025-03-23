import { MainPage, ProfilePage, LoginPage, ErrorPage } from "./pages";

document.body.innerHTML = `
  ${MainPage()}
  ${ProfilePage()}
  ${LoginPage()}
  ${ErrorPage()}
`;
