import { Component,Input , OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Oscar','Humour','Code is like humour.When you have to explain it its bad','Cory House',new Date(2019,7,12),0,0),
    new Quote(2,'David','Simplicity','Simplicity is the soul of efficiency','Austin Freeman',new Date(2019,6,9),0,0),
    new Quote(3,'Joy','Fix','Fix the cause not the symptom','Steve Maguire',new Date(2022,1,12),0,0),
   
   ];
   
   toggleDetails(index:any){
     this.quotes[index].showInfo = !this.quotes[index].showInfo;
   }
   
  
   addNewQuote(quote:any){
     let quoteLength = this.quotes.length;
     quote.id = quoteLength+1;
     Quote.completeDate = new Date(quote.completeDate)
     
     this.quotes.push(quote)
   }

  constructor() { }

  ngOnInit(): void {
  }

}
