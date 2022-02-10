import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Enquiry } from '../modal/enquiry';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  constructor(private http: HttpClient) { }

  // rooteURL = `${environment.apiUrl}/api/`;

  rooteURL = '/api/';

  sendEnquiry(enquiry: Enquiry): Observable<string> {
    return this.http.post(this.rooteURL + 'enquiry', enquiry, {responseType: 'text'});
  }
}
