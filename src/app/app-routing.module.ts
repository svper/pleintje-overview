import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StatsComponent } from "./stats/stats.component";

const routes: Routes = [
  { path: "home", component: DashboardComponent, pathMatch: "full" },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "stats", component: StatsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
