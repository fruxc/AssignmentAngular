import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment';
  constructor(private router: Router) {}
  onPostAction(event: any) {
    this.router
      .navigate(['/posts'])
      .then((success) => console.log('navigation success?', success))
      .catch(console.error);
  }
  onEmployeeAction(event: any) {
    this.router
      .navigate(['/employee'])
      .then((success) => console.log('navigation success?', success))
      .catch(console.error);
  }
}
