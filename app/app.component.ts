import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
              <div class="container">
              <h1>{{title}}</h1>
              <hr/>
              <h3>Hello {{name}}</h3>
              </div>
            `,
})
export class AppComponent  { 
  title : string = 'Obinna\'s Angular 2 Quickstart';
  name : string = 'Angular 2'; 
}
