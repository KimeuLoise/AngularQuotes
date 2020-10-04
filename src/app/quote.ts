export class Quote {
    id: number;
    text: string;
    author: string;
    dateAdded: Date;
    upvote: number;
    downvote: number;
    showDetails: boolean;
    submitter: string;
  
    constructor(id: number, text: string, author: string, submitter: string, dateAdded: Date) {
      this.id = id;
      this.text = text;
      this.author = author;
      this.dateAdded = dateAdded;
      this.upvote = 0;
      this.downvote = 0;
      this.showDetails = false;
      this.submitter = submitter;
    }
  }