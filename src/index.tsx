/* @refresh reload */
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import SplashView from "~/views/splash";
import { Toaster } from "solid-toast";

const routes = [
  {
    path: "/",
    component: SplashView
  },
  {
    path: "/feed",
    component: lazy(() => import("~/layouts/feed")),
    children: [
      {
        path: "/friends",
        component: lazy(() => import("~/views/feed/friends"))
      },
      {
        path: "/friends-of-friends",
        component: lazy(() => import("~/views/feed/friends-of-friends"))
      },
    ]
  },
  {
    path: "/login",
    component: lazy(() => import("~/views/login"))
  },
  {
    path: "/create-profile",
    component: lazy(() => import("~/views/create-profile"))
  },
  {
    path: "/profile",
    component: lazy(() => import("~/views/profile"))
  },
  {
    path: "/upload",
    component: lazy(() => import("~/views/upload"))
  },
  {
    path: "/uploadFromStorage",
    component: lazy(() => import("~/views/uploadFromStorage"))
  },
  {
    path: "/friends",
    component: lazy(() => import("~/layouts/friends")),
    children: [
      {
        path: "/connections",
        component: lazy(() => import("~/views/friends/connections"))
      },
      {
        path: "/requests",
        component: lazy(() => import("~/views/friends/requests"))
      },
    ]
  },
  {
    path: "/settings",
    component: lazy(() => import("~/views/settings"))
  },
  {
    path: "/settings/blocked-users",
    component: lazy(() => import("~/views/settings/blocked-users"))
  }
]

render(() => (
  <>
    <Toaster position="top-center"
      containerStyle={{
        "margin-top": "env(safe-area-inset-top)",
      }}
      toastOptions={{
        iconTheme: {
          primary: '#fff',
          secondary: '#000',
        },
        style: {
          color: "#fff",
          background: "#000",
          border: "2px solid #fff",
          "border-radius": "16px",
          "box-shadow": "0 0 10px rgba(0,0,0,0.5)"
        }
      }}
    />

    <Router>
      {/* @ts-expect-error */}
      {routes}
    </Router>
  </>
), document.getElementById("root") as HTMLDivElement);
