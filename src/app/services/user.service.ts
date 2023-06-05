import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get('/api/persons');
  }

  getUserByUsername(username: string) {
    const options = {
      options: new HttpParams().set('username', username)
    }
    return this.http.get('/api/person/' + options);
  }

  addPerson(person: PersonInterface) {
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post('/api/person/save', body, httpOptions);
  }

  addRole(role: RolesInterface) {
    const body = JSON.stringify(role);
    console.log(body);
    return this.http.post('/api/role/save', body, httpOptions);
  }
  addRoleToUser(roleToUser: RoleToUserInterface) {
    const body = JSON.stringify(roleToUser);
    console.log(body);
    return this.http.post('/api/role/addtouser', body, httpOptions);
  }

  deleteUserById(id: number) {
    const options = {
      options: new HttpParams().set('id', id)
    }
    return this.http.delete('/api/person/' + id);
  }


  //TODO: refreshToken

}
