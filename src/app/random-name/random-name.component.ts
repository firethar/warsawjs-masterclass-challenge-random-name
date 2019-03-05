import { Component, OnInit } from '@angular/core';
import { RandomNameService } from './random-name.service';

@Component({
  selector: 'app-random-name',
  templateUrl: './random-name.component.html',
  styleUrls: ['./random-name.component.css']
})
export class RandomNameComponent implements OnInit {
  public generatedName: string;

  constructor(private randomName: RandomNameService) { }

  public showGeneratedName() {
    this.randomName.getNames()
      .subscribe((data: any[]) => {
        this.generatedName = data[Math.floor(Math.random() * data.length)];
      });
  }

  ngOnInit() {
    this.showGeneratedName();
  }
}
