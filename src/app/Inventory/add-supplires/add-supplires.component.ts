import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Supplier } from '../../Model/supplier.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supplires',
  imports: [FormsModule],
  templateUrl: './add-supplires.component.html',
  styleUrl: './add-supplires.component.css'
})
export class AddSuppliresComponent {

  // this is to create the objet of the class

  supplier:Supplier=new Supplier();

  isUpdate=false;

  constructor(private router:Router){

    const nav=this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['s']){

      this.supplier=nav.extras.state['s'];

      this.isUpdate=true;
    }
  }


  supplierSubmit(){

    let suppliers:Supplier[]=JSON.parse(localStorage.getItem('gs')|| '[]');

    if(this.isUpdate){

      for(let i=1;i<suppliers.length;i++){

        if(suppliers[i].supplier_name==this.supplier.supplier_name){

          suppliers[i]=this.supplier;
        }
      }
    }

    else{
      suppliers.push(this.supplier)
    }

    localStorage.setItem('gs',JSON.stringify(suppliers))

    this.supplier=new Supplier();
    this.router.navigate(['/supplier'])
    
  }

}
