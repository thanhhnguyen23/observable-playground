// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './IUser';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  protected title = 'basic observable app';
  protected users$: Observable<IUser[]>;

  constructor(
    public userService: UserService
  ){}

  ngOnInit(){
    console.log('--> app component :: ngOnInit() has been executed\n\n');
    this.userService.getUsers()
      .subscribe(
        res => { this.users$ = res;
        console.log('response object: ' + res)
    });

  }

}