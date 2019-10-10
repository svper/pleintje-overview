import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StatsComponent } from "./stats/stats.component";
import { LineupComponent } from "./lineup/lineup.component";
import { ScoresheetComponent } from "./scoresheet/scoresheet.component";
import { MatchComponent } from "./match/match.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatsComponent,
    LineupComponent,
    ScoresheetComponent,
    MatchComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
