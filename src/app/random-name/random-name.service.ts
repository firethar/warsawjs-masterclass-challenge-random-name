import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Name, Names } from './name';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RandomNameService {
  constructor(private http: HttpClient) { }

  public getNames(): Observable<Names> {
    const namesUrl: string = environment.dataUrl;
    return this.http.get<Names>(namesUrl);
  }

  public getRandomName(): Observable<Name> {
    return this.getNames().pipe(
      map((names: Names) => {
        return names[Math.floor(Math.random() * names.length)];
      })
    );
  }
}
