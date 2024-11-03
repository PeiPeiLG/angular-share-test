import { Component, input, Input, output } from "@angular/core";

@Component({
  selector: "app-demo",
  standalone: true,
  imports: [],
  templateUrl: "./demo.component.html",
  styleUrl: "./demo.component.scss",
})
export class DemoComponent {
  data = input<string | undefined>(undefined);

  pageIndex = input();
  pageSize = input();
  valueChange = output<number>();
  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.pegeIndex = params["pegeIndex"];
    //   this.pageSize = params["pageSize"];
    // });
    console.log(this.pageSize());
  }
}
