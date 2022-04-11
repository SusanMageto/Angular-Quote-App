import { Component, OnInit } from '@angular/core';
import { NewQuote } from '../new-quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes1: NewQuote[] = [
    {
      id: 1,
      quote:
        'Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.',
      author: 'Thomas Edison (Inventor)',
      upvotes: 0,
      downvotes: 0,
    },
    {
      id: 1,
      quote:
        'It has become appallingly obvious that our technology has exceeded our humanity.',
      author: 'Albert Einstein (Scientist)',
      upvotes: 0,
      downvotes: 0,
    },
    {
      id: 1,
      quote:
        'Technology is anything that wasn’t around when you were born.',
      author: '- Alan Kay (Computer Scientist)',
      upvotes: 0,
      downvotes: 0,
    },
  ];
  

  constructor() {}

  ngOnInit(): void {}
}
