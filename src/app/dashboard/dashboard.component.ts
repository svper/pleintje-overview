import { Component, OnInit } from "@angular/core";
import { PhpService } from "../php.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  matches: any[];
  constructor(private _php: PhpService) {}

  ngOnInit() {
    //this.matches = this._php.getLocalMatches().reverse();
    this._php.getMatches().subscribe(data => {
      this.matches = data as any;
      this.matches.reverse();
    });
  }
}
