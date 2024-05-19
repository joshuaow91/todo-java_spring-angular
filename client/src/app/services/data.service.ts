import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) { }

  getTasks(params: any): Observable<any> {
    let httpParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return this.http.get(this.apiUrl, { params: httpParams });
  }

  postData(formData: { dueDate: any; description: any; title: any; priority: any; status: any }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(formData), { headers: headers });
  }

  updateTask(id: number, formData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
