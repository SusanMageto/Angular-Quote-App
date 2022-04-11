import { Component, OnInit, Input } from '@angular/core';
import { NewQuote } from '../new-quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  count =0;
  counter (type:string) {
    type==='add'?this.count++:this.count--
  }
  
  @Input () quotes1 !: NewQuote;
  author!: NewQuote;
  constructor() {}

  ngOnInit(): void {}
}
