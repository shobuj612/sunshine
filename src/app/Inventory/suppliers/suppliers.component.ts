import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../Model/supplier.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers',
  imports: [],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent  implements OnInit{
    
    collect_suppliers:Supplier[]=[];

    constructor(private router:Router){
      
    }

    ngOnInit(): void {
        
      this.collect_suppliers=JSON.parse(localStorage.getItem('gs') || '[]');
    }


    Edit(s:Supplier){


      this.router.navigate(['/addsuplier'], {state:{s}})
    }

    Delete(s:Supplier){

      if(confirm("do you want to delete?")){
        this.collect_suppliers=this.collect_suppliers.filter(f=>f!==s)

        localStorage.setItem('gs',JSON.stringify(this.collect_suppliers))
      }
    }
}
