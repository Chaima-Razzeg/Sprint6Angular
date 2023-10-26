import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Role } from '../model/role.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

/*  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                   {"username":"nadhem","password":"123","roles":['USER']} ]; */

 private helper = new JwtHelperService();

apiURL: string = 'http://localhost:8081/users';
token!:string;

public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];

  constructor(private router : Router,
              private http : HttpClient
) { }

  login(user : User)
  {
  return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
  }
 
 saveToken(jwt:string){
      localStorage.setItem('jwt',jwt);
      this.token = jwt;
      this.isloggedIn = true; 
      this.decodeJWT();
  }

  getToken():string {
    return this.token;
  }

  decodeJWT()
  {   if (this.token == undefined)
            return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

 


 /* SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }*/

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
    return false;
    return (this.roles.indexOf('ADMIN') >-1) ;
    ;
  }  


  logout() {
  this.loggedUser = undefined!;
  this.roles = undefined!;
  this.token= undefined!;
  this.isloggedIn = false;
  localStorage.removeItem('jwt');
  this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
   // this.getUserRoles(login);
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }

  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);   
  }



  /*getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }*/
    

  ListOfusers():Observable<User[]>
  {
    
    return this.http.get<User[]>(this.apiURL+"/all",);
    
    
  }
  consulterUser(id: number): Observable<User> {
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.apiURL + '/findUserById'}/${id}`;
    return this.http.get<User>(url,{headers:httpHeaders});
    }

    ListOfRoles():Observable<Role[]>
  {
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Role[]>(this.apiURL+"/allRoles", {headers:httpHeaders});
    
    

  }
  

AddRoleForUser(id:number,r:Role):Observable<User>
{
  let jwt = this.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  const url=`${this.apiURL}/addRole/${id}`
  return this.http.post<User>(url,r, {headers:httpHeaders});
  
}

Register(u:User):Observable<User>{

  
  return this.http.post<User>(this.apiURL+'/add', u );

}

deleteUser(id: number) {
  let jwt=this.getToken();
  jwt="Bearer "+jwt;
  let httpHeaders=new HttpHeaders({"Authorization":jwt})
  const url=`${this.apiURL}/deleteUserById/${id}`
  return this.http.delete(url,{headers:httpHeaders});
  }

  removeRoleFromUser(id:number,r:Role):Observable<User>
  {
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url=`${this.apiURL}/removeRoleFromUer/${id}`
    return this.http.post<User>(url,r, {headers:httpHeaders});
    
  }
  GetRoleById(id:number):Observable<Role>
  {
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url=`${this.apiURL}/findRoleById/${id}`
    return this.http.get<Role>(url, {headers:httpHeaders});
    
  }
  activateUser(name:String ,code:String):Observable<User>
  {
    
    const url=`${this.apiURL}/activateUser/${name}/${code}`
    
    return this.http.get<User>(url);
    
  }
  
}