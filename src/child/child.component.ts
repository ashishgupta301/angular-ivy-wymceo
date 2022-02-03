import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  number = 0;
  @Input() array;
  constructor(private cf: ChangeDetectorRef) {
    // this.cf.detach(); //Detaches from change detection tree until detectchanges() called
  }

  ngOnInit() {
    setInterval(() => {
      this.number = Math.random();

      // this.cf.markForCheck(); // it doesn't trigger change detection at all. It simply goes upwards from the current component to the root component and updates their view state to ChecksEnabled

      // this.cf.detectChanges(); //To run check to change detection for this component and child component

      // this.cf.reattach(); //Oposite of detach, to enable from this change detection from here
    }, 1000);
  }

  child() {
    console.log('Child calling');
  }
}
