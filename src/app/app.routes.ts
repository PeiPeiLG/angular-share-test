import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "demo",
    loadComponent: () =>
      import("./pages/demo/demo.component").then((c) => c.DemoComponent),
  },
];
