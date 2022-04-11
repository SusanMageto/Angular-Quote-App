export class NewQuote {
  id:number;
  quote:string;
  author:string;

  constructor (id:number, quote: string, author:string, upvotes: number, downvotes: number) {
    this.id=id;
    this.quote=quote;
    this.author=author;
  }
}
