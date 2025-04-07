import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requested } from '../models/requested.model';

@Injectable({
  providedIn: 'root'
})
export class RequestedService {
  private baseUrl = 'http://localhost:8080/api/requests';

  constructor(private http: HttpClient) {}
  
  // Create a new request for a letter
  createRequest(letterId: string): Observable<any> {
    return this.http.post(this.baseUrl, { letterId });
  }
  
  // Get all requests made by the current user
  getUserRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`);
  }
  
  // Get all requests for a specific letter (admin only)
  getRequestsForLetter(letterId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/letter/${letterId}`);
  }
  
  // Accept a request (admin only)
  acceptRequest(requestId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${requestId}/accept`, {});
  }
  
  // Deny a request (admin only)
  denyRequest(requestId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${requestId}/deny`, {});
  }
}
