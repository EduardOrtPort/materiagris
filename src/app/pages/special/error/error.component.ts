import { AfterViewInit, Component,} from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})

export class ErrorComponent implements AfterViewInit {

  ngAfterViewInit() {
    feather.replace();
  }
}

