import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './comps/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './comps/view-employees/view-employees.component';
import { AddTaskComponent } from './comps/add-task/add-task.component';
import { ViewTasksComponent } from './comps/view-tasks/view-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ServiceService } from './shared/service.service';
 
@NgModule({
 declarations: [
   AppComponent,
   AddEmployeeComponent,
   ViewEmployeesComponent,
   AddTaskComponent,
   ViewTasksComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   MatToolbarModule,
   MatCardModule,
   MatInputModule,
   MatButtonModule,
   HttpClientModule,
   FormsModule  
  
  
 ],
 providers: [ServiceService],
 bootstrap: [AppComponent]
})
export class AppModule { }
