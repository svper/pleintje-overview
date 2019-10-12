import { Component, OnInit } from "@angular/core";

import { PhpService } from "../php.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  stats: any[];
  constructor(private _php: PhpService) {}

  ngOnInit() {
    //this.stats = this._php.getLocalStats();
    this._php.getStats().subscribe(data => {
      this.stats = data as any;

      this.stats.forEach(player => {
        player.points = player.goals * 4 + player.assists * 3;
      });

      this.stats.sort((n1, n2) => {
        return n2.points - n1.points;
      });
      console.log(this.stats);
    });
  }
}
