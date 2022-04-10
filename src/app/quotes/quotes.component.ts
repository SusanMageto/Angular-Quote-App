import { Component, OnInit } from '@angular/core';
import { NewQuote } from '../new-quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: NewQuote []= [
    new NewQuote (1, 'this one','sue',0,0),
    new NewQuote (2, 'this two', 'vuvu',0,0),
    new NewQuote (3, 'this three','deno',0,0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
