import { Component, OnInit } from '@angular/core';
import { NewQuote } from '../new-quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: NewQuote []= [
    new NewQuote (1, 'this one',0,0),
    new NewQuote (1, 'this one',0,0),
    new NewQuote (1, 'this one',0,0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
