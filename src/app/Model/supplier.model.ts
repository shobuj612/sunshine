/**
 *              <th> supplier id </th>
                <th> supplier name </th>
                <th> raw material id </th>
                <th> raw material name </th>
                <th>raw material quantity</th>
                <th>raw material received date </th>
                <th>raw material received by </th>
 */

export class Supplier{

    supplier_id:number;
    supplier_name:string;
    raw_material_id:number;
    raw_material_name:string;
    raw_material_quantity:number;
    raw_material_receicved_date:Date;
    raw_material_received_by:string;

    constructor(){


        this.supplier_id=0
        this.supplier_name=''
        this.raw_material_id=0
        this.raw_material_name=''
        this.raw_material_quantity=0
        this.raw_material_receicved_date=new Date()
        this.raw_material_received_by=''
    }
}