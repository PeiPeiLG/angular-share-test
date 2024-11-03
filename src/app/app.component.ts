import { Component, inject, input } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { DemoComponent } from "./pages/demo/demo.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  private route = inject(ActivatedRoute);
  type: "a" | "b" | "c" = "a";

  itemArray = [];

  pageIndex = input();
  pageSize = input();

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.pegeIndex = params["pegeIndex"];
    //   this.pageSize = params["pageSize"];
    // });
    console.log(this.pageIndex());
  }
}
