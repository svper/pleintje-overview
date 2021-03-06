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
    /*
    this.stats = this._php.getLocalStats();
    this.stats.forEach(player => {
      player.points =
        player.goals * 4 +
        player.assists * 3 +
        player.clean_sheets * 5 +
        player.keeper_games * 2 +
        player.keeper_cs * 10;
    });

    this.stats.sort((n1, n2) => {
      return n2.points - n1.points;
    });

*/

    this._php.getStats().subscribe(data => {
      this.stats = data as any;

      this.stats.forEach(player => {
        player.points =
          player.goals * 4 +
          player.assists * 3 +
          player.clean_sheets * 5 +
          player.keeper_games * 2 +
          player.keeper_cs * 10;
          player.ppm = (player.points / player.games).toFixed(1);
      });

      this.stats.sort((n1, n2) => {
        return n2.points - n1.points;
      });
    });
  }
}
