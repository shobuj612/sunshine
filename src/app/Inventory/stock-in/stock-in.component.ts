import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockLevel } from '../../Model/stock.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-in',
  imports: [FormsModule],
  templateUrl: './stock-in.component.html',
  styleUrl: './stock-in.component.css'
})
export class StockInComponent {

  // meke the object of the StockLevel class

  stock:StockLevel = new StockLevel();

  isUpdate=false;

  constructor(private router:Router){

    const nav=this.router.getCurrentNavigation(); // this is used to collect the navigationvali

    if(nav?.extras.state&&nav.extras.state['s']){

      this.stock=nav.extras.state['s'];

      this.isUpdate=true;
    }
  }


  // this is  the method of the sumbission


  stockSumbit(){


    // first collect the all object from the localstorage

     let stocks : StockLevel[] =JSON.parse(localStorage.getItem('gs') || '[]')


    // now put the condition  for the update

    if(this.isUpdate){


      for(let i=0;i< stocks.length;i++){

        if(stocks[i].material_name==this.stock.material_name){

          // question : why only Name .because two or many things can be change


          stocks[i]=this.stock;

        }
      }

    }
     
    else{
      stocks.push(this.stock)
    }
    
    // put this into the localstorage
    
    localStorage.setItem('gs',JSON.stringify(stocks))

    this.stock= new StockLevel(); // this is for clean the form after submit
    this.router.navigate(['/stocklevel'])



  }

}
