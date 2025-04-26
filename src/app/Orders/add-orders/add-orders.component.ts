import { Component } from '@angular/core';
import { Order } from '../../Model/order.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderServiceService } from '../../Services/order.service.service';


@Component({
  selector: 'app-add-orders',
  imports: [FormsModule],
  templateUrl: './add-orders.component.html',
  styleUrl: './add-orders.component.css'
})
export class AddOrdersComponent {
    
  // this is object initialized  for the class
  order: Order = new Order();

  isUpdate=false;

  constructor(private router:Router, private orderservice:OrderServiceService){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.order=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
      if(this.isUpdate){


        this.orderservice.updateOrder(this.order.order_id,this.order).subscribe(()=>{

          this.router.navigate(['/allorder']);
        })
      }

      else{


        this.orderservice.createOrder(this.order).subscribe(()=>{
           
          this.order= new Order()
          this.router.navigate(['/allorder']);
        });
      }

     // this.order=new Order();

      //this.router.navigate(['/allorder'])
    }



  }




    
