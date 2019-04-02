import { Component, OnInit } from '@angular/core';
import { RandomNameService } from './random-name.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Name, NamesData } from './names';

@Component({
  selector: 'app-random-name',
  templateUrl: './random-name.component.html',
  styleUrls: ['./random-name.component.css']
})
export class RandomNameComponent implements OnInit {
  public errorMessage: string = '';
  public $generatedName: Observable<Name>;

  constructor(private randomNameService: RandomNameService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.$generatedName = this.randomNameService
      .getNames()
      .pipe(
        map((names: NamesData) => {
          return names[Math.floor(Math.random() * names.length)];
        })
      );
  }

  reload() {
    this.load();
  }
}
