import { Component, OnInit } from '@angular/core';
import { NewQuote } from '../new-quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  quotes: NewQuote []= [
    new NewQuote (1, 'this one','sue',0,0),
    new NewQuote (2, 'this two', 'vuvu',0,0),
    new NewQuote (3, 'this three','deno',0,0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
