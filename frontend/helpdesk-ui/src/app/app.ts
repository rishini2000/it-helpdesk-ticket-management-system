import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; //because our application will have multiple pages.
// Component	Allows us to create an Angular component
// signal	Creates a reactive value that Angular can track
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('helpdesk-ui');
}
