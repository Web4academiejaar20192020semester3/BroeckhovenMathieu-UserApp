import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
/*users: User[] = [{
    userId: 'bib@ucll.be',
    password: 't',
    salt: 't',
    firstName: 'Bib',
    lastName: 'Leothekaris',
    role: 'admin',
    status: 'Online',
    gender: 'male',
    age: 12
  },
  {
    userId: 'an@ucll.be',
    password: 't',
    salt: 't',
    firstName: 'An',
    lastName: 'Nemman',
    role: 'admin',
    status: 'Online',
    gender: 'female',
    age: 25
  },
  {
    userId: 'jan@ucll.be',
    password: 't',
    salt: 't',
    firstName: 'Jan',
    lastName: 'De Kan',
    role: 'admin',
    status: 'Offline',
    gender: 'male',
    age: 68
  }];*/
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    timer(0, 1500).subscribe( () => {
      this.userService.getUsers().subscribe(data => this.users = data);
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
