import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/add.service'

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private service: AddService) { }

  ngOnInit(): void {
  }


  entry = {
    taskId:Number,
    taskDesc : '',
    assignedTo : '',
    assignedBy : '',
    taskStatus : '',
  }

  addData(data:any){
    this.entry.taskId = data.taskID
    this.entry.taskDesc= data.taskDesc
    this.entry.assignedTo= data.assignedTo
    this.entry.assignedBy= data.assignedBy
    this.entry.taskStatus= data.taskStatus
    this.service.addTask(this.entry).subscribe(()=>{
      console.log("Added Item")
    })
  }
}


