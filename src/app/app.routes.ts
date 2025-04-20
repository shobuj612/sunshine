import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TenderComponent } from './Noticee/tender/tender.component';
import { ETenderComponent } from './Noticee/e-tender/e-tender.component';
import { CirculerComponent } from './circuler/circuler.component';
import { AllOrdersComponent } from './Orders/all-orders/all-orders.component';
import { AddOrdersComponent } from './Orders/add-orders/add-orders.component';
import { StockLevelComponent } from './Inventory/stock-level/stock-level.component';
import { StockInComponent } from './Inventory/stock-in/stock-in.component';
import { SuppliersComponent } from './Inventory/suppliers/suppliers.component';
import { AddProductsComponent } from './Products/add-products/add-products.component';
import { AllProductsComponent } from './Products/all-products/all-products.component';
import { AllEmployeeComponent } from './Employees/all-employee/all-employee.component';
import { AttendenceComponent } from './Employees/attendence/attendence.component';
import { PayRollComponent } from './Employees/pay-roll/pay-roll.component';
import { QcLogsComponent } from './Qc/qc-logs/qc-logs.component';
import { ProductionComponent } from './Qc/production/production.component';
import { CriteriaSettingComponent } from './Qc/criteria-setting/criteria-setting.component';
import { SalesOrdersComponent } from './Myreports/sales-orders/sales-orders.component';
import { EmployeeComponent } from './Myreports/employee/employee.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddSuppliresComponent } from './Inventory/add-supplires/add-supplires.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { AddAttendenceComponent } from './Employees/add-attendence/add-attendence.component';
import { AddPayrollComponent } from './Employees/add-payroll/add-payroll.component';
import { AddQcLogsComponent } from './Qc/add-qc-logs/add-qc-logs.component';
import { AddSalesOrderComponent } from './Myreports/add-sales-order/add-sales-order.component';

export const routes: Routes = [

    { path: '', component: HomeComponent }, // this is default component
    { path: 'about', component: AboutComponent }, // this is default component
    { path: 'contact', component: ContactComponent }, // this is default component
    { path: 'tender', component: TenderComponent }, // this is default component
    { path: 'etender', component: ETenderComponent },
     {path:'circuler',component:CirculerComponent},
    { path: 'allorder', component: AllOrdersComponent }, // this is default component
    { path: 'addorder', component: AddOrdersComponent }, // this is default component
    { path: 'stocklevel', component: StockLevelComponent }, // this is default component
    { path: 'stockin', component: StockInComponent }, // this is default component
    { path: 'supplier', component: SuppliersComponent },
    { path: 'addproduct', component: AddProductsComponent },
    { path: 'allproduct', component: AllProductsComponent },
    { path: 'allemployee', component: AllEmployeeComponent },
    { path: 'attendence', component: AttendenceComponent },
    { path: 'payroll', component: PayRollComponent },
    { path: 'qclog', component: QcLogsComponent },
    { path: 'production', component: ProductionComponent },
    { path: 'criteria', component: CriteriaSettingComponent },
    { path: 'salesorders', component: SalesOrdersComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'dashbord', component: DashbordComponent },
    { path: 'addsuplier', component: AddSuppliresComponent },
    { path: 'addemployee', component: AddEmployeeComponent },
    { path: 'addattendence', component: AddAttendenceComponent },
    { path: 'addpayroll', component: AddPayrollComponent },
    { path: 'addqclogs', component: AddQcLogsComponent },
    { path: 'addsalesorders', component: AddSalesOrderComponent }

];
