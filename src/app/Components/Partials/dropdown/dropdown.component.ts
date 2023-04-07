import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CategoryData } from "src/app/Shared/data-provider.service";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit {
  chevronRight = faChevronRight;
  selectedCategory: number = 0;
  @Input("dropdownData") data!: CategoryData[];
  @Input("alignment") align!: "left" | "right";

  placementStyle: { [key: string]: string } = {
    left: "50%",
    transform: "translateX(-50%)",
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.align) {
      this.placementStyle = {
        [this.align]: "0",
        transform: "translateX(0)",
      };
    }
  }
  navigate(...path: string[]): void {
    this.router.navigate(path);
  }
}
