import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 userInfo:any
 editUsers:any

 formvalue !: FormGroup
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.GetData().subscribe(data=>{
      console.log(data)
      this.userInfo=data
    }
    )
  }

  editUser(item){

   this.formvalue.controls['name'].setValue(item.name);
    this.formvalue.controls['username'].setValue(item.username);
    this.formvalue.controls['email'].setValue(item.email);



  }
  deleteUser(user){
    this.api.DeleteData(user.id).subscribe(data=>{
      alert('deleted')
      this.userInfo=this.userInfo.filter(u=>u.id!==user.id)
    }
  )}

}
