import { Component } from '@angular/core';
import { ApihandlerService } from 'src/app/services/apihandler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor() { }

  test() {
    if (0) {
      return;
    } else {
      console.log('there clicked');

    }
  }



}
