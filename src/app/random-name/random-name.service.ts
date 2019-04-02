import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Name, NamesData } from './names';

const DATA_URL: string = './assets/data/names.json';

@Injectable({
  providedIn: 'root'
})
export class RandomNameService {

  constructor(private http: HttpClient) { }

  public getNames(): Observable<NamesData> {
    const namesUrl: string = `${DATA_URL}`;
    return this.http.get<NamesData>(namesUrl);
  }
}
