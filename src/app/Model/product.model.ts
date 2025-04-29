export class Product {
    product_id: number;
    manager_id: number;
    buyer_id: number;
    product_name: string;
    product_price: number;
    manufacturing_date: Date;
    product_status: string;
    product_quantity: number;
    department_name: string;
  
    constructor() {
      this.product_id = 0;
      this.manager_id = 0;
      this.buyer_id = 0;
      this.product_name = '';
      this.product_price = 0;
      this.manufacturing_date = new Date();
      this.product_status = '';
      this.product_quantity = 0;
      this.department_name = '';
    }
  }
  