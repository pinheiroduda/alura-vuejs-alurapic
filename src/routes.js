import Register from "./components/register/Register.vue";
import Home from "./components/home/Home.vue";

export const routes = [
  { path: "", name: "home", component: Home, titulo: "Home", menu: true },
  {
    path: "/register",
    name: "register",
    component: Register,
    titulo: "Register",
    menu: true
  },
  { path: "*", component: Home, menu: false }
];
