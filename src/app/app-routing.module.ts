import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SuccessComponent } from "./success/success.component";
import { WarningComponent } from "./warning/warning.component";

const routes: Routes = [
  { path: "success", component: SuccessComponent },
  { path: "warning", component: WarningComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
