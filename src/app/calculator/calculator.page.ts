import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CalculDirective } from '../directives/calcul.directive';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
  
})
export class CalculatorPage {


  one: number=0;
  two:number=0;
  result:number=0;
  todayDate: Date = new Date();
  constructor(private router:Router) { }

 
  addition(): void{
    this.result= this.one + this.two;
    }
    sous(): void{
      this.result= this.one-this.two;
       }
       
    multiplication(): void{
      this.result= this.one*this.two;
    }
    division(): void{
      if(this.two===0){
        console.log("division impossible");
      }
      this.result= this.one/this.two;
    }

    
calculator():void{
  this.router.navigate(['calculator'])
}

home():void {
  this.router.navigate(['home']);
  }
}
