import { Component } from '@angular/core';
import { MyTestComponent } from '../my-test/my-test.component';

@Component({
  selector: 'app-my-header',
  standalone: true,
  imports: [MyTestComponent],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css'
})
export class MyHeaderComponent {

}
