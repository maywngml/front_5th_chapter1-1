import BrowserRouter from "./browserRouter";
import HashRouter from "./hashRouter";

type RouterType = "browser" | "hash";

let routerType: RouterType = "browser";

export const setRouterType = (type: RouterType) => {
  routerType = type;
};

const getRouter = () => {
  return routerType === "browser" ? BrowserRouter : HashRouter;
};
export default getRouter;
