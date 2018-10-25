import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material'
import { HttpService } from '../../common/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) { }
  username: string;
  password: string;
    ngOnInit() {
      this.httpService.get('http://localhost:8080/api/users/5bd0c9c32b84ca0cb40f5330').subscribe(function(res){
        console.log(res);
      });;
    }
    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       this.router.navigate(["user"]);
      }else {
        alert("Invalid credentials");
      }
    }
    }

