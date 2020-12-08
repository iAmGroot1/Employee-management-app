import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './comps/add-employee/add-employee.component';
import { AddTaskComponent } from './comps/add-task/add-task.component';
import { ViewEmployeesComponent } from './comps/view-employees/view-employees.component';
import { ViewTasksComponent } from './comps/view-tasks/view-tasks.component';
 
const routes: Routes = [
 { path:'', component:AddEmployeeComponent },
 { path:'addtask', component:AddTaskComponent},
 { path:'tasks', component:ViewTasksComponent},
 {path:'employees', component:ViewEmployeesComponent}
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
 
 

