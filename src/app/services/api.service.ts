import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { }

  GetData(){
    return this.Http.get("https://jsonplaceholder.typicode.com/users")
  }

  PutData(data:any,id:number){
    return this.Http.put(`https://jsonplaceholder.typicode.com/users/${id}`,data)
  }
  PostData(data:any){
    return this.Http.post(`https://jsonplaceholder.typicode.com/users/`,data)
  }

  DeleteData(id:number){
    return this.Http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
