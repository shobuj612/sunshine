import { Component, OnInit } from '@angular/core';
import { StockLevel } from '../../Model/stock.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-level',
  imports: [],
  templateUrl: './stock-level.component.html',
  styleUrl: './stock-level.component.css'
})
export class StockLevelComponent  implements OnInit{

  // now i have to take object of the StockLevel

  collect_stock: StockLevel[]=[]

  constructor(private router:Router){

  }

  // this is the main part when this is work first collect the data from the localstorage

  ngOnInit(): void {
      
    this.collect_stock=JSON.parse(localStorage.getItem('gs') || '[]');


  }

  // this is the method for the form


  Edit(s:StockLevel){


    this.router.navigate(['/stockin'] , {state:{s}})
  }

  Delete(s:StockLevel){

    if(confirm("do you want to delete?")){

      this.collect_stock=this.collect_stock.filter(f=>f!==s);

      localStorage.setItem('gs',JSON.stringify(this.collect_stock))
    }
  }
}
