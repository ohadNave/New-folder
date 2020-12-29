import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/addNote",
    name: "addNote",
    component: ()=> import("./pages/AddNotePage")
  },
  {
    path: "/editNote/:note_Id",
    name: "edit",
    component: ()=> import("./pages/EditNotePage"),
    props: true 
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
