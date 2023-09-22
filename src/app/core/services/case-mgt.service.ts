import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Case } from '../models/case';

@Injectable({
  providedIn: 'root',
})
export class CaseManagementService {
  http = inject(HttpClient);

  baseUrl = 'http://localhost:8080/case-management';

  addNew(item: Case) {
    return this.http.post(this.baseUrl + '/add', item);
  }

  getCases() {
    return this.http.get<Case[]>(this.baseUrl + '/getCases');
  }
}
