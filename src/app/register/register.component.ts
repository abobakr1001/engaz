import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sa:AuthService,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
  }
  register(f){
   // console.log(f.value)
   let data=f.value
    this.sa.signUp(data.email,data.password).then((user)=>{
      if (user) {
        localStorage.setItem("engaz",user.user.uid)
        this.route.navigate(['/'])

      }else{
        alert("error")
      }

    })
  }

}
