import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  posts =[
        {title: 'First Post', content: 'asda'},
        {title: 'First a', content: 'asda'},
        {title: 'First c', content: 'asda'}
    ]
    addreses =[
      {
        number: 'ul. Leona Kruczkowskiego 10 ', 
        city: 'Trzebinia',
         zipcode: '32-540',
          phonenumber: ' 530 792 265 '
        }
  ]

  ngOnInit() {
  }

}
