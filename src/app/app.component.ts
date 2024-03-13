import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Posso criar um template:'', para casos de html pequeno
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular';
}
