import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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
  @ViewChildren(ToggleComponentD10) toggleComps: QueryList<ToggleComponentD10>;
  btn1: boolean = true;
  btn2: boolean = true;
  btn3: boolean = true;

  ngOnInit() {
    this.toggleComps.changes.subscribe(console.log);
    setTimeout(() => {
      // this.inputFocus1.nativeElement.focus();
    }, 1000);
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.toggleComp1.toggle();
    }, 3000);
  }

  handleChangeToogle1() {}

  handleChangeToogle2() {
    console.log('hello2');
  }
}
