import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihandlerService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private http: HttpClient) {
  }

  fetchDataFromApi() {
    return this.http.get(this.apiUrl)
  }
}
