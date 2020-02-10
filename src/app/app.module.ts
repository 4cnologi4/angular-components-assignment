import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { SuccessComponent } from "./success/success.component";
import { WarningComponent } from './warning/warning.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  declarations: [AppComponent, SuccessComponent, WarningComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
