import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input()
  ratings:Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }


}
