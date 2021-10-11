import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TimeInterval } from 'rxjs';
import { ToggleComponentD10 } from './toggle.component';

@Component({
  selector: 'day10',
  templateUrl: `./day10.component.html`,
})
export class Day10Component {
  @ViewChild(ToggleComponentD10, { static: true })
  toggleComp1: ToggleComponentD10;
  @ViewChild('toggleComp2', { static: true }) toggleComp2: ToggleComponentD10;
  @ViewChild('toggleBtn', { static: true })
  toggleBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('inputFocus1', { static: true })
  inputFocus1: ElementRef<HTMLInputElement>;
  @ViewChild('inputFocus2', { static: true })
  inputFocus2: ElementRef<HTMLInputElement>;

  @ViewChildren('listTog ') toggleComps: QueryList<ToggleComponentD10>;
  @ViewChildren(ToggleComponentD10) toggleList: QueryList<ToggleComponentD10>;

  btn1: boolean = true;
  btn2: boolean = true;
  btn3: boolean = true;

  ngOnInit() {
    // console.log(this.toggleComps);
    setTimeout(() => {
      // this.inputFocus1.nativeElement.focus();
    }, 1000);
  }

  ngAfterViewInit() {
    this.toggleComps.changes.subscribe(console.log);
  }

  handleChangeToogle1() {
    console.log(Math.random());
  }

  handleChangeToogle2() {
    setTimeout(() => {
      this.toggleComp1.toggle();
    }, Math.random() * 10000);
  }
}
