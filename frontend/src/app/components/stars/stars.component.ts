import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  stars:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }


  getIconName(stars:number,index:number) {
    //if stars has fraction && it's the last index(star) return half star
    if(stars%1 && parseInt(stars.toString()) == index){
      return "star_half";
    }
    else{
      return "star";
    }
  }
}
