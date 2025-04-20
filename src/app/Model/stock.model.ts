
/*
                 <th>Material id</th>
                <th>Material name</th>
                <th>Material quantity</th>
                <th>Material receivedDate</th>
                <th>Material Received By</th>
*/

export class StockLevel{

    material_id:number;
    material_name:string;
    material_quantity:number;
    material_receive_date:Date;
    material_received_by:string;

    constructor(){


        this.material_id=0;
        this.material_name='';
        this.material_quantity=0;
        this.material_receive_date= new Date();
        this.material_received_by='';
    }
}