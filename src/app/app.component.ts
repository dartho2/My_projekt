import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private route: Router) { }
 
  title = 'me-poty';

  showHeaderB(){
    // console.log(this.route.url)
    if (this.route.url.startsWith('/yoga')) {

      return true;
    } else {
      return false;
    }
   }
}
