import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>Welcome, {{user}}!</h1>
  `,
  styleUrls: ['./header.component.css'],
  standalone: true
})

export class HeaderComponent {
  user = "Sabrina"
}
