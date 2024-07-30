import { ProfessorsService } from './professer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [],
  template: `
    <h1>List of courses</h1>
    <ul>
      <li *ngFor ="let professor of professors">
          {{ professor }}
      </li>
    </ul>
  `,
  styleUrl: './professor.component.css'
})

export class ProfessorComponent {
  title = "Professor1";
  professors;

  getTitle() {
    return this.title;
  }

  //to initilize object
  //dependency injection: inject the professor service
  constructor(professorService: ProfessorsService){
    this.professors = professorService.getProfessor();
  }
}
