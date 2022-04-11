import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewQuote } from '../new-quote';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input () quotes1 !: NewQuote;
  @Output () isComplete= new EventEmitter<boolean>()
  
  count =0;
  author!: NewQuote;
  counter (type:string) {
    type==='add'?this.count++:this.count--
  }

  deleteQuote (complete:boolean) {
    this.isComplete.emit(complete);
  }
  
  
  constructor() {}

  ngOnInit(): void {}
}
