
import { Component } from "@angular/core";

//Decorator Pattern
@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course}}
            </li>
        </ul>
    `
})

export class CoursesComponent {
    title ="Course Title";
    courses = ["Course 1", "Course 2", "Course 3"];
}