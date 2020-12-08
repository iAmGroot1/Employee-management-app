import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  getTask(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/api/task'+id)
  }

  addTask(newEntry: any):Observable<any>{
    console.log(newEntry)
    var head = new HttpHeaders()
    head.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/task',newEntry) 
  }

  addEmp(newEntry: any):Observable<any>{
    var head = new HttpHeaders()
    head.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/Emp',newEntry) 
  }
}





