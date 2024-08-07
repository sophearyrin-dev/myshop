import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "../courses.component";
import { BrowserModule } from "@angular/platform-browser";
import { ProfessorsService } from "./professor/professer.service";
//imporot when using NgModel
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    BrowserModule,
    FormsModule,
  ],
  providers : [
    ProfessorsService
  ],
  bootstrap : [AppComponent]
})

export class AppModule {}