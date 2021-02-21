import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) 
  {
    
    this.getConfig()
  }
 

     
    localUrl = 'http://127.0.0.1:8000/api/user';

  
   public getConfig() {

     return this.http.get<[]>(
     this.localUrl, { observe: 'response' });

    }




























}
