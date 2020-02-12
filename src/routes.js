
import Index from "views/index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import login from "login/login.js";
import Tables from "views/examples/Tables.jsx";
// import Icons from "views/examples/Icons.jsx";
import Mapi from "views/examples/Mapi.jsx";
// import Notifications from "views/examples/Notifications.jsx";
import Home from "views/examples/Home.jsx";
import signup from "views/examples/signup.js";




var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/auth"
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/craybid"
  // },
  {
    path: "/Home",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-blue",
    component: Home,
    layout: "/craybid"
  },
  // {
  //   path: "/Icon",
  //   name: "Icon",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/craybid"
  // },
  {
    path: "/maps",
    name: "Notifications",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/craybid"
  },
  {
    path: "/Mapi",
    name: "Badges",
    icon: "ni ni-pin-3 text-orange",
    component: Mapi,
    layout: "/craybid"
  },
  
  {
    path: "/tables",
    name: "Meet Ambassadors",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/craybid"
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: login,
    layout: "/auth"
  },
  // {
  //     path: "/Notifications",
  //     name: "Notification",
  //     icon: "ni ni-key-25 text-info",
  //     component: Notifications,
  //     layout: "/craybid"
  //   },
  
  {
    path: "/signup",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: signup,
    layout: "/auth"
  }
];
export default routes;
