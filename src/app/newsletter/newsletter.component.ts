import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  log(answer:HTMLElement):void{}

}
