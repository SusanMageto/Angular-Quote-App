import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewQuote } from '../new-quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})


export class QuoteFormComponent implements OnInit {
  lastQuote= new NewQuote(1, '', '', 0, 0);
  @Output () sendQuotes= new EventEmitter<NewQuote> ()
  addQuote (){
    this.sendQuotes.emit(this.lastQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
