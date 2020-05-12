import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styles: []
})
export class ChildAComponent implements OnInit, OnChanges {

  // @Input() childA_points: number;
  // @Input() childB_message: string;
  @Input() data: any;
  prevPoints = 0;

  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    let diff = this.data.parent_points - this.prevPoints;  // random n from parent
    console.log(`Child A:  Received new points: ${diff}`);
    console.log(`Child A:  New total points: ${this.data.parent_points}`);
    this.prevPoints = this.data.parent_points;
  }

  ngOnInit(): void {
    this.prevPoints = this.data.parent_points;
  }

}
