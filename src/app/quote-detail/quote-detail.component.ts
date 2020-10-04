import { Quote } from '../quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;

  @Output() deleteQuote = new EventEmitter<boolean>();

  deleteThisQuote(deleteThis: boolean) {
    this.deleteQuote.emit(deleteThis);
  }


  constructor() {}

  ngOnInit(): void {}
}
