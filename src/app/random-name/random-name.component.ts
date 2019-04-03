import { Component, OnInit } from '@angular/core';
import { RandomNameService } from './random-name.service';
import { Observable} from 'rxjs';
import { Name } from './name';

@Component({
  selector: 'app-random-name',
  templateUrl: './random-name.component.html',
  styleUrls: ['./random-name.component.css']
})
export class RandomNameComponent implements OnInit {
  public errorMessage: string = '';
  public $generatedName: Observable<Name> = this.randomNameService.getRandomName();

  constructor(private randomNameService: RandomNameService) {}

  ngOnInit() {
  }

  // reload() {
  //   // not used yet
  // }
}
