import { Injectable } from "@angular/core";
import { IUser } from '../models/user';
import { Users } from '../models/users.data';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    users = Users.slice(0);

    getIndex(id): number{
        return this.users.findIndex( u => u.id === id);
    }

    getUser(id): IUser{
        return this.users[this.getIndex(id)];
    }

    getUsers(): IUser[]{
        return this.users;
    }

    addUser(newUser: IUser): void{
        this.users.push(newUser);
    }
}