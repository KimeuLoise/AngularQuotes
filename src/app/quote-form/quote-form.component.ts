import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  newQuote: Quote = new Quote(0, '', '', '', new Date());

  @Output() createQuote = new EventEmitter<Quote>();

  addQuote() {
    this.createQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, '', '', '', new Date());
  }

  constructor() {}

  ngOnInit(): void {}
}
