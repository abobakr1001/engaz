import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Assets } from './../assets';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  userInfo:any
  formvalue !: FormGroup
  modales : Assets = new Assets();
  showadd : boolean = false
  showabdate : boolean = false
  constructor(private api:ApiService,private formbuilder:FormBuilder) {
    this.Getapi()
   }

  ngOnInit(): void {
  this.formvalue = this.formbuilder.group({
    name: [''],
    username: [''],
    email: [''],

  })

  }

  Getapi(){
     this.api.GetData().subscribe(data=>{
      console.log(data)
      this.userInfo=data
   })
  }

  postDetails(){
    this.modales.name = this.formvalue.value.name;
    this.modales.username = this.formvalue.value.username;
    this.modales.email = this.formvalue.value.email;

    this.api.PostData(this.modales).subscribe(data=>{
       console.log(data)
       this.formvalue.reset()
    })
  }


  editUser(item){
    this.showabdate = true
    this.showadd = false
      this.modales.id = item.id;
      this.formvalue.controls['name'].setValue(item.name);
      this.formvalue.controls['username'].setValue(item.username);
      this.formvalue.controls['email'].setValue(item.email);

  }

  editDetails(){
    this.modales.name = this.formvalue.value.name;
    this.modales.username = this.formvalue.value.username;
    this.modales.email = this.formvalue.value.email;
    this.api.PutData(this.modales,this.modales.id).subscribe(data=>{
      console.log(data)
      this.formvalue.reset()
    })
  }







}
