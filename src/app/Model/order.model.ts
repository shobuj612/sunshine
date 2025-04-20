export class Order {

    /**
     * Table Columns:
     * <th>Order id</th>
     * <th>Product id</th>
     * <th>Order name</th>
     * <th>Order Received Date</th>
     * <th>Order Delivery Date</th>
     * <th>Order quantity</th>
     * <th>Order completed by</th>
     */
  
    order_id: number;
    product_id: number;
    order_name: string;
    order_received_date: Date;
    order_delivery_date: Date;
    order_quantity: number;
    order_completed_by: string;
  
    constructor() {
      this.order_id = 0;
      this.product_id = 0;
      this.order_name = '';
      this.order_received_date = new Date();       // today date
      this.order_delivery_date = new Date();       // today date
      this.order_quantity = 0;
      this.order_completed_by = '';
    }
  }
  