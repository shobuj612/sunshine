import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Model/product.model';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
import { NodeWithI18n } from '@angular/compiler';
>>>>>>> 2f5447d6e63679442890b8270d5f6b4633e445c3

@Component({
  selector: 'app-add-products',
  imports: [FormsModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  // create the objct 
  // if i submit then the data will come heere




  product: Product = new Product() ;

  isUpdate = false;


  // make the constructor


  constructor(private router:Router){
    
    const nav=this.router.getCurrentNavigation();
    if(nav?.extras.state&&nav.extras.state['s']){

      this.product=nav.extras.state['s'];

       this.isUpdate=true ;
    }
  }

  productSumbit(){
  
   // now fetch all the  data  from the localStorage

   let products:Product[]=JSON.parse(localStorage.getItem('gs') || '[]');

     if(this.isUpdate){


      for(let i=0; i<products.length;i++){

        if(products[i].product_name==this.product.product_name){

          products[i]=this.product
        }
      }
     }


        // now add this to the Prodcuts of the object

     else{


       products.push(this.product)
     }

      
     // add this to the localstorag



     localStorage.setItem('gs',JSON.stringify(products))

     // now fresh the form by redeclaring the oabject

     this.product= new Product();
       
     // now go to the allproduct table

     
     this.router.navigate(['/allproduct'])
  }

}
