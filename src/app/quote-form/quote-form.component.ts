import { Component, OnInit } from '@angular/core';
import { NewQuote } from '../new-quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  lastQuote= new NewQuote(1, '', '', 0, 0);

  constructor() { }

  ngOnInit(): void {
  }

}
