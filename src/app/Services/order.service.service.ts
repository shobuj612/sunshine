import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl='http://localhost:8080/orders';


  // HttpClient send the request to the backend and return the response to the frontednd

  constructor(private http:HttpClient) { }

   getAllOrders() : Observable<Order[]>{

    return this.http.get<Order[]>(this.baseUrl)
   }


   // this is the create order method


   createOrder(order:Order):Observable<Order>{

    return this.http.post<Order>(this.baseUrl,order)
   }


   // this is update order method

   updateOrder(id:number, order:Order):Observable<Order>{

    return this.http.put<Order>(`${this.baseUrl}/${id}`,order);
   }

   // this is deletemethod 


   deleteOrder(id:number):Observable<void>{


    return this.http.delete<void>(`${this.baseUrl}/${id}`);
   }

}
