import Detail from "../views/pages/detail";
import Like from "../views/pages/like";
import Home from "../views/pages/home";
import AboutUs from "../views/pages/aboutUs";

const routes = {
  "/": Home, // default page
  "/aboutus": AboutUs,
  "/detail/:id": Detail,
  "/like": Like,
};

export default routes;
