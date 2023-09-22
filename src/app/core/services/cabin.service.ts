import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cabin, Case } from '../models/case';

@Injectable({
  providedIn: 'root',
})
export class CabinManagementService {
  http = inject(HttpClient);

  baseUrl = 'http://localhost:8080/homeless';

  addNew(item: Cabin) {
    return this.http.post(this.baseUrl + '/addCabin', item);
  }

  getCabins() {
    return this.http.get<Cabin[]>(this.baseUrl + '/getCabins');
  }
}
