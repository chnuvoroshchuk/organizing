import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
    return this.http.get('/api/person/' + username);
  }

  addPerson(person: any) {
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post('/api/person/save', body, httpOptions);
  }

  addRole(role: any) {
    const body = JSON.stringify(role);
    console.log(body);
    return this.http.post('/api/role/save', body, httpOptions);
  }
  addRoleToUser(roleToUser: any) {
    const body = JSON.stringify(roleToUser);
    console.log(body);
    return this.http.post('/api/role/addtouser', body, httpOptions);
  }

  deleteUserById(id: number) {
    return this.http.delete('/api/person/' + id);
  }


  //TODO: refreshToken

}
