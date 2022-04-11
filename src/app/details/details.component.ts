import { Component, OnInit, Input } from '@angular/core';
import { NewQuote } from '../new-quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  
  @Input () quotes1 !: NewQuote;
  author!: NewQuote;
  constructor() {}

  ngOnInit(): void {}
}
