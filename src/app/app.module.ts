import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StatsComponent } from "./stats/stats.component";
import { LineupComponent } from "./lineup/lineup.component";
import { ScoresheetComponent } from "./scoresheet/scoresheet.component";
import { MatchComponent } from "./match/match.component";
import { SafePipe } from "./safe.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatsComponent,
    LineupComponent,
    ScoresheetComponent,
    MatchComponent,
    SafePipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
