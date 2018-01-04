import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  userList: User[] = [];
  user: User;
  constructor() { }

  ngOnInit() {
  }

  addUser(form) {
    this.user = form.value;
    this.userList.push(this.user);
    console.log(form.value);
  }

}
