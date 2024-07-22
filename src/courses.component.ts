
import { Component } from "@angular/core";

//Decorator Pattern
@Component({
    selector: 'courses',
    template: '<h2>{{ title }}</h2>'
})

export class CoursesComponent {
    title ="Course Title"
}