import { log } from 'node:console';
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

    <img src="{{ imageUrl }}"/>
    <img [src]="imageUrl" />
    
    <div (click)="divClickMethod()">
      <button (click)="methodName($event)">My Button</button>
    </div>

    <div>
      <input type="text" (keyup.enter)="enterPressed($event)"/>
      <button>Press Enter</button>
    </div>

    <!-- template variable -->
    <!-- user input hello -->
    <input type="text" (keyup.enter)="inputEmail($event)" /> 

    <!-- or we can use -->
    <input #email (keyup.enter)="inputEmail2(email.value)"/>
  `,
  styleUrl: './professor.component.css'
})

export class ProfessorComponent {
  inputEmail($event:any){
    console.log($event.target.value); //hllo
  }
  inputEmail2(email:any){
    console.log(email); //hllo
  }

  
  title = "Professor1";
  professors;
  imageUrl ="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"

  getTitle() {
    return this.title;
  }

  //to initilize object
  //dependency injection: inject the professor service
  constructor(professorService: ProfessorsService){
    this.professors = professorService.getProfessor();
  }

  divClickMethod() {//to prevent bubbling up
    console.log("Div Clicked");
  }
  methodName($event:any){
    $event.stopPropagation();
    console.log("You clicked");
    console.log($event);
  }

  enterPressed($event: any){
    console.log("Enter Pressed");
    console.log($event);
  }


}
