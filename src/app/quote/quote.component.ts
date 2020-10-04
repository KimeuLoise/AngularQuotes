import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Dont get it twisted, Love is a beautiful thing',
      'Malik',
      'Kimeu',
      new Date(2020, 9, 2)
    ),
    new Quote(
      2,
      'You know you’re in love when you don’t want to fall asleep because reality is finally better than your dreams.',
      'Jamal',
      'Kimeu',
      new Date(2020, 7, 10)
    ),
    new Quote(3, 'You dont have to taste the donut to know its sweetness', 'Angie', 'Kimeu', new Date(2020, 6, 4)),
    new Quote(
      4,
      'Life is what you make it, Its all about choices',
      'Brian',
      'Kimeu',
      new Date(2020, 5, 28)
    ),
  ];

  addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  delete(deleteThis: boolean, index: number) {
    if (deleteThis) {
      let confirmDelete = confirm(
        'Are you sure you want to delete this quote?'
      );
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  highestUpVote(): Quote {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else{
      return new Quote(0, '', '', '', new Date());
    }
  }

  addNewQuote(newQuote: Quote) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
  }

  constructor() {}

  ngOnInit(): void {}
}
