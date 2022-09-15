import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  closesecion(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
  
}
