import { Component } from '@angular/core';
import { MyTestComponent } from '../my-test/my-test.component';

@Component({
  selector: 'app-my-footer',
  standalone: true,
  imports: [MyTestComponent],
  templateUrl: './my-footer.component.html',
  styleUrl: './my-footer.component.css'
})
export class MyFooterComponent {

}

