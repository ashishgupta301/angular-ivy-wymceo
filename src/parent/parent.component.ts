import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  array = [];
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.array = [Math.random()]; //If use push value, then reference is not changed and not available for change detection.
    }, 1000);
  }

  parent() {
    console.log('Parent calling');
  }
}
