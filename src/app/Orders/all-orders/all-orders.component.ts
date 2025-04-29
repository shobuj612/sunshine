import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/order.model';
import { Router } from '@angular/router';
import { OrderServiceService } from '../../Services/order.service.service';

@Component({
  selector: 'app-all-orders',
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css'
})
export class AllOrdersComponent implements OnInit{

  // this is object for this  class

  collect_order:Order[]=[];

  constructor(private router:Router, private orderservice:OrderServiceService){


  }


  ngOnInit(): void {
      
    this.loadOrders();

  }

  // this is the method to get all the data from the data base

  loadOrders(){


    this.orderservice.getAllOrders().subscribe(data=>{

            this.collect_order=data;
    });

  }

  Edit(a:Order){

    this.router.navigate(['/addorder'],{state:{a}})
  }

  Delete(a:Order){

    if(confirm("are you want to delete?")){


     this.orderservice.deleteOrder(a.order_id).subscribe(()=>{

      this.loadOrders();
     });

     
    }
  }

}
