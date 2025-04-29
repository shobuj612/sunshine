import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  // now make the object

  collect_product:Product[]=[] ;

  constructor(private router:Router){}


  ngOnInit(): void {
      
    this.collect_product=JSON.parse(localStorage.getItem('gs') || '[]')


  }


  // Edit method for the table

  Edit(s:Product){

    this.router.navigate(['/addproduct'] ,{state:{s}})
  }

  // delete method for the table


  Delete(s:Product){

    // check the user want to delete or not

    if(confirm("do you want to  delete?")){

      // if true then  delete this by using the filter method


        
      this.collect_product=this.collect_product.filter(f=>f!==s)
        
     // after deleting this put it in the localstorage
     

      localStorage.setItem('gs',JSON.stringify(this.collect_product))
    }
  }

}
