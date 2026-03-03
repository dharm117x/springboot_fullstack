import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
})
export class UserComponent implements OnInit {
    edit: boolean = false;
    users: User[] = [];
    newUser: User = { name: '', email: '', phone: '' };
    selectUser: User = { name: '', email: '', phone: '' };

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
            this.newUser = { name: '', email: '', phone: '' };
        });
    }

    editUser(user: User): void {
        if (user.id !== undefined) {
            this.userService.getUser(user.id).subscribe(data => this.selectUser = data);
            this.edit = true;
        }
    }
	
    updateUser(user: User): void {
        if (user.id !== undefined) {
            this.userService.updateUser(user.id, user).subscribe(() => this.loadUsers());
			this.edit = false;
        }
    }

    cancelEdit(user: User): void {
        this.edit = false;
        this.newUser = { name: '', email: '', phone: '' };
    }

    deleteUser(id: number): void {
        if (id !== undefined) {
            this.userService.deleteUser(id).subscribe(() => this.loadUsers());
        }
    }

}