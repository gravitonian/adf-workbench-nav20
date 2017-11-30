import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ADF Workbench';

  onLoginSuccess($event) {
    console.log('Successful login: ' + $event.value);
  }

  onLoginError($event) {
    console.log('Failed login: ' + $event.value);
  }
}
