import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<h1>Welcome {{title}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project';
  firstName: string = "Rohit";
  lastName: string = "Sahoo";
  count : number = 0;
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
 }
 getCount(): void {
   console.log(++this.count);
 }
}
