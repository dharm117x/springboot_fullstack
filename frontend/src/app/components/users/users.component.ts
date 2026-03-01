import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '', phone: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  addUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { id: 0, name: '', email: '', phone: '' };
    });
  }

  updateUser(user: User): void {
    this.userService.updateUser(user.id, user).subscribe(() => this.loadUsers());
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}