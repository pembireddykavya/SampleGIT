import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './pages/my-header/my-header.component';
import { MyBodyComponent } from './pages/my-body/my-body.component';
import { MyFooterComponent } from './pages/my-footer/my-footer.component';
import { MyTestComponent } from './pages/my-test/my-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyHeaderComponent,MyBodyComponent,MyFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'my-first-project';
}
