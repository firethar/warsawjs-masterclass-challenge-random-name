import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNameService {
  private namesUrl = './assets/data/names.json';

  constructor(private http: HttpClient) { }

  public getNames() {
    return this.http.get(this.namesUrl);
  }
}
